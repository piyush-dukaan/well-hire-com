const { Question, Company, College } = require('../../database/models');
const { uploadPDFToStorage, deletePDFFromStorage } = require('../../utils/fileUpload');

exports.createQuestion = async (questionData, userId, pdfFile) => {
  const pdfUrl = await uploadPDFToStorage(pdfFile);
  const { companyName, collegeName, ...otherData } = questionData;
  
  const [company] = await Company.findOrCreate({ where: { name: companyName } });
  const [college] = await College.findOrCreate({ where: { name: collegeName } });

  return Question.create({
    ...otherData,
    pdfUrl,
    CompanyId: company.id,
    CollegeId: college.id,
    uploaderId: userId,
  });
};

exports.updateQuestion = async (id, updateData, pdfFile) => {
  const question = await Question.findByPk(id);
  if (!question) throw new Error('Question not found');

  if (pdfFile) {
    await deletePDFFromStorage(question.pdfUrl);
    updateData.pdfUrl = await uploadPDFToStorage(pdfFile);
  }

  if (updateData.companyName) {
    const [company] = await Company.findOrCreate({ where: { name: updateData.companyName } });
    updateData.CompanyId = company.id;
    delete updateData.companyName;
  }

  if (updateData.collegeName) {
    const [college] = await College.findOrCreate({ where: { name: updateData.collegeName } });
    updateData.CollegeId = college.id;
    delete updateData.collegeName;
  }

  await question.update(updateData);
  return question.reload();
};

exports.deleteQuestion = async (id) => {
  const question = await Question.findByPk(id);
  if (!question) throw new Error('Question not found');
  await deletePDFFromStorage(question.pdfUrl);
  await question.destroy();
};

exports.searchQuestions = async (query) => {
  return Question.findAll({
    include: [
      { model: Company, where: { name: { [Op.iLike]: `%${query}%` } } },
      { model: College, where: { name: { [Op.iLike]: `%${query}%` } } },
    ],
  });
};
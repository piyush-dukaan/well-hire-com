const { Company, College, Question } = require('../../database/models');

exports.listCompanies = async () => {
  return Company.findAll();
};

exports.getCompanyWithColleges = async (companyId) => {
  return Company.findByPk(companyId, {
    include: [
      {
        model: Question,
        include: [{ model: College, attributes: ['id', 'name'] }],
        attributes: ['id', 'visitDate'],
      },
    ],
  });
};
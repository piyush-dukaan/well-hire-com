const questionService = require('./service');

exports.createQuestion = async (req, res) => {
  try {
    const question = await questionService.createQuestion(req.body, req.user.id, req.file);
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const question = await questionService.updateQuestion(req.params.id, req.body, req.file);
    res.json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    await questionService.deleteQuestion(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.searchQuestions = async (req, res) => {
  try {
    const questions = await questionService.searchQuestions(req.query.q);
    res.json(questions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
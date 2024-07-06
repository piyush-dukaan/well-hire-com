const express = require('express');
const router = express.Router();
const multer = require('multer');
const authController = require('./core-services/auth/controller');
const companyController = require('./core-services/company/controller');
const questionController = require('./core-services/question/controller');
const authMiddleware = require('./middlewares/auth');

const upload = multer({ storage: multer.memoryStorage() });

// Auth routes
router.post('/auth/signup', authController.signup);
router.post('/auth/login', authController.login);

// Company routes
router.get('/companies', authMiddleware, companyController.listCompanies);
router.get('/companies/:id', authMiddleware, companyController.getCompanyWithColleges);

// Question routes
router.post('/questions', authMiddleware, upload.single('pdf'), questionController.createQuestion);
router.put('/questions/:id', authMiddleware, upload.single('pdf'), questionController.updateQuestion);
router.delete('/questions/:id', authMiddleware, questionController.deleteQuestion);
router.get('/questions/search', authMiddleware, questionController.searchQuestions);

module.exports = router;
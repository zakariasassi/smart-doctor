const express = require('express');
const router = express.Router();
const questionController = require('../controller/qutionsContrller');

// Routes for CRUD operations
router.post('/', questionController.createQuestion);
router.get('/', questionController.getQuestions);
router.get('/:id', questionController.getQuestionById);
router.put('/:id', questionController.updateQuestion);
router.delete('/:id', questionController.deleteQuestion);

router.get('/getallById/:id', questionController.getQuestionsById);

module.exports = router;

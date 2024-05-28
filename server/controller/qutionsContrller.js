const Question = require('../model/QutionsModel');

// Create a new question
exports.createQuestion = async (req, res) => {
    try {
        console.log(req.body);
        const { qution, placeID  } = req.body;
        const newQuestion = new Question({ qution, placeID });
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all questions
exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        console.log(questions);
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a all question by ID
exports.getQuestionsById = async (req, res) => {
    try {
        const question = await Question.find({placeID : req.params.id});
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get a single question by ID
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a question by ID
exports.updateQuestion = async (req, res) => {
    try {
        const { text, category } = req.body;
        const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, { text, category }, { new: true });
        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a question by ID
exports.deleteQuestion = async (req, res) => {
    try {
        const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

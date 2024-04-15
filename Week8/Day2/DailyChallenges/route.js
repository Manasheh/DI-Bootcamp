const express = require('express');
const router = express.Router();

let score = 0;
let currentQuestionIndex = 0;

const questions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answer: "Mars",
    },
    {
      question: "What is the largest mammal in the world?",
      answer: "Blue whale",
    },
  ];

router.get('/', (req, res) => {
    if (currentQuestionIndex >= questions.length) {
        return res.send('Quiz has ended!');
    }
    const currentQuestion = questions[currentQuestionIndex];
    res.json({ question: currentQuestion.question });
});

router.post('/', (req, res) => {
    const { answer } = req.body;
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        score++;
        res.send('Correct! Move to the next question.');
    } else {
        res.send('Incorrect! Try again.');
    }
    currentQuestionIndex++;
});

router.get('/score', (req, res) => {
    res.send(`Your final score is: ${score}`);
});

module.exports = router;

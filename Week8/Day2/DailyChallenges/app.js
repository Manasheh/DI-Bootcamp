const express = require('express');
const quizRoutes = require('./route.js');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/quiz', quizRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
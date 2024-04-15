import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const emojis = [
    { emoji: '😀', name: 'Grinning Face' },
    { emoji: '😎', name: 'Smiling Face with Sunglasses' },
    { emoji: '😍', name: 'Heart Eyes' },
];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

app.get('/', (req, res) => {
    const { emoji, name } = getRandomEmoji();
    const options = emojis
        .filter(e => e.name !== name)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(e => e.name);

    res.send(`
        <form action="/guess" method="post">
            <h1>Guess the Emoji!</h1>
            <p>What is the name of this emoji: ${emoji}</p>
            <input type="hidden" name="emoji" value="${emoji}">
            <ul>${options.map(option => `<li><input type="radio" name="guess" value="${option}">${option}</li>`).join('')}</ul>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/guess', (req, res) => {
    const { emoji, guess } = req.body;
    const correctAnswer = emojis.find(e => e.emoji === emoji).name;
    const message = guess === correctAnswer ? 'Congratulations! Your guess is correct!' : `Sorry, the correct answer is "${correctAnswer}". Try again!`;
    res.send(message);
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));





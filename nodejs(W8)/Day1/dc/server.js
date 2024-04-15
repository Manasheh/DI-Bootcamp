const {emojis} = require('./emojis/emojis.js')
const cors = require('cors')
const express = require('express')

console.log(emojis);
const app = express()
const PORT = 3001
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(cors())
app.listen(PORT, () => {
    console.log('run on 3001');
})

app.get('/emojis', (req, res) => {
    const randomIndx = Math.floor(Math.random() * emojis.length)
    const randomEmoji = emojis[randomIndx]
    const shuffleEmoji = shuffleArray(emojis)
    // console.log(shuffleEmoji);
    // console.log(randomIndx);
    res.json({shuffleEmoji, randomEmoji})

})
app.post('/emojis', (req, res) => {
    const { name, guess } = req.body
    if(name === guess) return res.json({message: "correct"})
    res.json({message: 'Try again'})
} )

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


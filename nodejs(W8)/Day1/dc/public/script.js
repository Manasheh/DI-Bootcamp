
function getRandom() {
    fetch('http://localhost:3001/emojis')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        let randomEmoji = data.randomEmoji;
        let options = data.shuffleEmoji
        render(randomEmoji, options)
    })
    .then(err => {
        console.log(err);
    })
}

getRandom()

function render(emoji, options) {
    const html = options.map(item => {
        return ` ${item.name}, `
    })
    const root = document.getElementById('root')
    root.innerHTML = 'options:' + html.join('') + 'hint:' + emoji.emoji
}

function guessAnEmoji() {
    const guess = document.getElementById('guess').value
    // console.log(guess);
    const name = randomEmoji.name
    // console.log(name);
    fetch('http://localhost:3001/emojis', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        bodu:   JSON.stringify({name, guess})
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
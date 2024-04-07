const btn = document.querySelector('#submit')
const quoteSection = document.querySelector('#quotes')
let num = []

const quotes = [
    { author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
    { author: "Albert Einstein", quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." },
    { author: "Frank Zappa", quote: "So many books, so little time." },
    { author: "Marcus Tullius Cicero", quote: "A room without books is like a body without a soul." },
    { author: "Mae West", quote: "You only live once, but if you do it right, once is enough." },
    { author: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world." },
    { author: "Robert Frost", quote: "In three words I can sum up everything I've learned about life: it goes on." },
    { author: "Mark Twain", quote: "If you tell the truth, you don't have to remember anything." },
    { author: "Dr. Seuss", quote: "Don't cry because it's over, smile because it happened." },
    { author: "Oscar Wilde", quote: "I am so clever that sometimes I don't understand a single word of what I am saying." }
  ];
  
quotes.map((item , indx) => {
    item['id'] = indx + 1
    indx++
})
// console.log(quotes);

btn.addEventListener('click', generateQuote)
let p = document.createElement('p')
function generateQuote(e) {
    e.preventDefault()
    console.log(num);
    let randomNumber = generateNum()
    p.innerText = quotes[randomNumber].quote
    quoteSection.appendChild(p)
    
}
generateQuote()

function generateNum () {
    let randomNum = Math.floor(Math.random() * quotes.length)
    if (num.length == quotes.length) {
        num = []
    }
    
    if (!num.includes(randomNum)) {
        num.push(randomNum)
        return randomNum
    }
    return generateNum()
}




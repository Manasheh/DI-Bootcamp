const BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies'

const dropdowns = document.querySelectorAll('.dropdown select')
const btn = document.querySelector('button')
const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')
const msg = document.querySelector('.msg')
let i = 0;

for(let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement('option')
        newOption.innerText = currCode
        newOption.value = currCode
        if(select.name = 'from' && currCode == 'USD') {
            newOption.selected = 'selected'
        }
        else if (select.name = 'to' && currCode === 'INR') {
            newOption.selected = 'selected'
        }
        select.append(newOption)
    }
    select.addEventListener('change', (e) => {
        updateFlag(e.target)
    })
}

const updateFlag = (element) => {
    let currCode = element.value
    let countryCode = countryList[currCode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector('img')
    img.src = newSrc
}


btn.addEventListener('click', async (e) => {
    e.preventDefault()
    let amount = document.querySelector('.amount input')
    let amtVal = amount.value
    // console.log(amtVal);
    if (amtVal === '' || amtVal < 1) {
        // amtVal = 1
        amount.value = '1'
    }
    // console.log(fromCurr.value, toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response = await fetch(URL)
    // console.log(response);
    let data = await response.json()
    let rate = data[toCurr.value.toLowerCase()]
    let finalAmount = amount * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
})



// const postAUser = async (name, username, email) => {
//     let url = 'https://users-18kl.onrender.com/userjson'
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({name, username, email})
//     }
//     try {
//         const res = await fetch(url, options)
//         const data = await res.json()
//         // console.log(data);
//         let html = data.map(item => {
//             return `<div>${item.name}</div>`
//         })
//         document.getElementById('root').innerHTML = html.join('')
//     } catch (error) {
//         console.log(error);
//     }
// }



































// const factPara = document.getElementById('fact')
// const btn = document.getElementById('btn')
// const url = 'https://cat-fact.herokuapp.com/facts'

// const getFacts = async () => {
//     let response = await fetch(url)
//     let data = await response.json()
//     factPara.innerText = data[2].text
// } 
// function getFacts() {
//     fetch(url)
//     .then(res =>res.json())
//     .then(res => {
//         console.log(res);
//         factPara.innerText = res[2].text
//     })
//     .catch(err => console.log('error facing:', err))
// }
// btn.addEventListener('click', getFacts)

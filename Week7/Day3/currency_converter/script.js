// const fromSelect = document.getElementById('from')
// const toSelect = document.getElementById('to')
// const switchButton = document.getElementById('switch')

// document.getElementById('input').addEventListener('keyup', handleClick)
// fromSelect.addEventListener('change', handleClick)
// toSelect.addEventListener('change', handleClick)
// switchButton.addEventListener('click', switchCurrencies)

// function switchCurrencies(){
//     const fromValue = fromSelect.value
//     const toValue = toSelect.value
//     fromSelect.value = toValue
//     toSelect.value = fromValue
//     handleClick()
// }
// function fetchCurrencies() {
//     const url = 'https://v6.exchangerate-api.com/v6/56056099d5fb1fdbb5816e2b/codes'
//     fetch(url)
//     .then(res => res.json())
//     .then(res => populateDropdown(res.supported_codes))
//     .catch(err => console.log(err))
// }

// function populateDropdown(codes) {
//     const entries = Object.entries(codes)
//     for (const entry of entries){
//         // console.log(entry); 
//         const [indx, [code, name]] = entry
//         const option = document.createElement('option')
//         const option2 = document.createElement('option')
//         option.innerText = code + ',' + name
//         option2.innerHTML = code + ',' +name
//         option.value = code
//         option2.value = code
//         fromSelect.appendChild(option)
//         toSelect.appendChild(option2)
//         if (code === 'USD') {
//             option.selected = true;
//         }
//         if (code === 'ILS') {
//             option2.selected = true;
//         }
//     }
// }

// async function handleClick() {
//     // console.log(fromSelect.value);
//     // console.log(toSelect.value);
//     const input = document.getElementById('input')
//     const summary = document.getElementById('summary')
//     const currency1 = fromSelect.value
//     const currency2 = toSelect.value
//     const url = `https://v6.exchangerate-api.com/v6/56056099d5fb1fdbb5816e2b/pair/${currency1}/${currency2}`
//     try {
        
//         const res = await fetch(url)
//         const resJson = await res.json()
//         // console.log(resJson);
//         const rate = resJson.conversion_rate
//         const amount = Number(input.value)
//         const total = amount * rate
//         // console.log(total);
//         summary.innerText = `${amount} ${currency1} = ${total} ${currency2}`
//     } catch (error) {
//         console.log(error);
//     }

// }
// fetchCurrencies()

console.log(Promise.reject('reject'))
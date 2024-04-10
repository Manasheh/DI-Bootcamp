
const { products } = require('./product')

function product(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
             return products[i]
        }
        return null
    }
}

// product('smartphone')
console.log(product('SmartPhone'));
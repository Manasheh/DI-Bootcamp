// Exercise 1 
/* Create a function call displayNumbersDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.

Bonus: Add a parameter divisor to the function.
*/

// nums = []
// sum = 0
// function displayNumbersDivisible(num) {
//     for (let i = 0; i <= 500; i++) {
//         if (i % num === 0) {
//             nums.push(i)
//             sum += i
//         }
//     }
// }

// displayNumbersDivisible(23)
// displayNumbersDivisible(3)
// displayNumbersDivisible(45)
// console.log(nums.length);
// console.log(sum);


// Exercise 2
/* 
Add the stock and prices objects to your js file.

Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

Create a function called myBill() that takes no parameters.

The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

Call the myBill() function.

Bonus: If the item is in stock, decrease the item’s stock by 1
*/

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  
// // console.log(stock['apple']);
// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ['banana', 'orange', 'apple']

// let priceSum = 0;
// function myBill() {
//     for (let i = 0; i < shoppingList.length; i++) {
//            if (shoppingList[i] in stock && shoppingList[i] in prices) {
//                 delete stock[shoppingList[i]]
//                 priceSum = priceSum + prices[shoppingList[i]];
//            }
//     }
// }

// console.log(myBill());
// console.log(priceSum);
// console.log(stock);


// Exercise 3
/* 
Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
an item price
and an array representing the amount of change in your pocket.

In the function, determine whether or not you can afford the item.
If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
*/

// function changeEnough(itemPrice, amountOfChange) {
//     let total = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.10 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01
//     if (total >= itemPrice) {
//         return true
//     } 
//     else {
//         return false
//     }
// }


// console.log(changeEnough(4.25, [25, 20, 5, 0]))
// console.log(changeEnough(14.11, [2,100,0,0])) 


// Exercise 4

// function hotelCost() {

// }

// Exercise 5 

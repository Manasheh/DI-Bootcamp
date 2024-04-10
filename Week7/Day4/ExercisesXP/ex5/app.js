// var sum = require('lodash.sum');
const _ = require('lodash')
const {addition, multiplication} = require('./math')

console.log(addition(1, 3));
console.log(multiplication(1,2));

console.log(_.sum([2,4]));
console.log(_.multiply(2,4));
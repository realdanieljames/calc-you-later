/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/

const calculate = require('./calculate-back-end.js')

const num1 = getInput(0)
const operation = getInput(2)
const num2 = getInput(1)


const calculation = (calculate(num1, operation, num2))
console.log(calculation)

/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}

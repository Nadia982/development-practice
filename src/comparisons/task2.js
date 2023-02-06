// * Create an expression that verifies variable a is odd or even number
// Mathematic clue: If a number is evenly divisible by 2 with no remainder, then it is even
// Assign to the variable a value 4
// Print to the console the expr and verify if true was printed
const a = 4;
const isitEven = a % 2 === 0;
console.log(isitEven);

// Assign to the variable a value 5
// Print to the console the expression and verify if false was printed
const b = 5;
isitEven = b % 2 === 0;
console.log(isitEven);

let a = "This is a string.";
let b = undefined;
let c = true;
let d = 30;

console.log(d + d + a + d);

// Try to guess the result. Execute the code to verify: npm start src/dataTypes/task2.js

//I guessed the result would be "3030This is a string.30"
//The result was actually "60This is a string.30"

// Write console.log with expression: d + c + a + b
console.log(d + c + a + b);

// Try to guess the result. Execute the code to verify: npm start src/dataTypes/task2.js
//I guessed the result would be "31Thisisastring."
//The result was actually "31This is a string.undefined"

// 1. Create a function with two parameters a, b (number type). Let’s name it a binary function
// 2. Binary function (e.g. title might be binaryFn) returns a*b value

const binaryFn = function (a, b) {
  return a * b;
};

// 3. Create another function (title might be fn) with 3 parameters: a, b, c where a and b are number type,
// but c is a reference to the binary function. Function fn calls binary function c passing parameters a, b
// 4. Call function fn passing numbers 3, 8 and third parameter - previously created binaryFn function. Expected result is 24

c = binaryFn;

const fn = function (a, b, c) {
  return c(a, b);
};

console.log(fn(11, 8, binaryFn));

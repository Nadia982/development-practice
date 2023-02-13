// 1. Create a function that:
//    a. takes an argument and
//    b. returns a function that returns that argument.
// E.g. const fnResult = fn(5);
// fnResult(); // Expected return value is 5

function fn(a) {
  let fnResult = function () {
    return a;
  };
  return fnResult;
}

console.log(fn(6));

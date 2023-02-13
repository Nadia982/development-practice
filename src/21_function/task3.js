// 1. Create a function with two parameters a, b (number type)
// 2. This function returns another function as a result.
// That result function doesn’t have params, but it returns a + b value

function getSum(a, b) {
  addNumbers = function () {
    return a + b;
  };

  return addNumbers();
}

console.log(getSum(2, 4));

// Create an arrow function with one array of numbers argument

// The function returns the smallest number in array.

const arr = [19, 3, 4, 5, 6, 7];

const smallestNumber = (arr) => {
  return Math.min(...arr);
};

console.log(smallestNumber(arr));

// Initialize a new array of 10 elements. Generate 10 random numbers
const randomArrayTenNumbers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);

// Print generated array
console.log(randomArrayTenNumbers);
// Call the function passing generated array and print result to the console

console.log(smallestNumber(randomArrayTenNumbers));
// E.g. const array = [12, 4. 5, 8, 7]
// The answer is 4

// Create an arrow function with one array of numbers argument
// The function returns the average number of array elements
const average = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
};

// Initialize a new array of 10 elements. Generate 10 random numbers
const randomArrayTenNumbers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);

// Print generated array
console.log(randomArrayTenNumbers);

// Call the function passing generated array and print result to the console
console.log(average(randomArrayTenNumbers));

// E.g. const array = [2, 1. 3]. The answer is 2

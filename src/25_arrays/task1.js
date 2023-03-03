// Topics: init an array, iterate through elements, access element

// Create an array with initial values set:
// Any string
// Some number
// Boolean value
// Any string
// Assign this array to the constant

const first = ["cat", 2, true, "hamster"];

// Iterate through array elements
// Using classic loop for
for (let i = 0; i < first.length; i++) {
  console.log(first[i]);
}

// Using array function forEach
first.forEach((i) => {
  console.log(i);
});

// After the loop - create a constant second and assign a second array element as an initial constant value
const second = ["this", "is", "a", "second", "array", "element"];

// Print the constant to the console
console.log(second);

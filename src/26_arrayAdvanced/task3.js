// Create a function which returns an array of adult people names from people array
// Function has one argument - objects array

// Each object in array - can have any field set, but will have two fields: age, and name

// Function selects adult people age >= 18

// And returns an array of selected people names

// E.g.// Calling function with an argument:
// [{name: 'Tomas', age: 15}, {name: 'Erika', age: 22}, {name: 'Saulius', age: 17}, {name: 'Audrius', age: 34}]

// Function returns an array of adult people names: ['Erika', 'Audrius']

const returnAdults = (array) => {
  let adults = array.filter((person) => person.age >= 18);
  return adults.map((adult) => adult.name);
};
// Tests
const array = [
  { name: "Tomas", age: 15 },
  { name: "Erika", age: 22 },
  { name: "Saulius", age: 17 },
  { name: "Audrius", age: 34 },
];

console.log(returnAdults(array));

// Create a function which replaces an object in array by field id
// Function has two arguments: first: array of objects. Second: an object for replacement
// Each object in array and in second function argument - can have any field set, but will have a field id

// Function replaces an object in array with second argument object if field id values are equal
// If array doesn’t have an object with id value like second function argument - object is pushed into the array and returns an updated array as a result
// E.g. calling function with first argument - array: [{id: 4, name: 'Lecturer'}, {id: 3, title: 'devMentor'}, {id: 5}]
// Second argument - object: {id: 3}
// Function returns an updated array: [{id: 4, name: 'Lecturer'}, {id: 3}, {id: 5}]

const replaceObject = (arr, object) => {
  let matching = arr.find((val) => val.id === object.id);
  //   console.log(matching);
  let matchingIndex = arr.findIndex((val) => val.id === object.id);
  //   console.log(matchingIndex);
  arr.splice(matchingIndex, 1, object);
  return arr;
};

// Tests

const arr = [
  { id: 4, name: "Lecturer" },
  { id: 3, title: "devMentor" },
  { id: 5 },
];
const object = { id: 3 };

const result = replaceObject(arr, object);
console.log(result);

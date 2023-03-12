// Create a function which removes objects in array by id fields
// Function has two arguments: (1) array of objects; (2) array of id values.
// Each object in array can have any field set, but will have a field named "id"
// Function removes objects from the array if 2nd argument array contains object id field value & returns an updated array as a result
// E.g. calling function with:

// first argument - array: [{id: 4, name: 'Lecturer'}, {id: 3, title: 'devMentor'}, {id: 5}]
// Second argument - array: [1, 7, 3, 2, 10, 4]
// Function returns an updated array: [{id: 5}]

const removeObjectByIDs = (arrayOfObjects, arrayOfIDs) => {
  const filtered = arrayOfObjects.filter((object) => {
    // console.log(!arrayOfIDs.includes(object.id))
    if (!arrayOfIDs.includes(object.id)) {
      return object;
    }
  });
  return filtered;
};
// Tests
const arrayOfObjects = [
  { id: 4, name: "Lecturer" },
  { id: 3, title: "devMentor" },
  { id: 5 },
];
const arrayOfIDs = [1, 7, 3, 2, 10, 4];

const result = removeObjectByIDs(arrayOfObjects, arrayOfIDs);
console.log(result);

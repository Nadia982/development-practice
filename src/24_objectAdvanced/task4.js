// Topic: clone object overriding some fields

// Create an arrow function with arguments:
// obj (type object)
// field (type string)
// value (any type)

// The function returns a new object with all fields of obj and field: value

// E.g. calling function: fn({name: 'Rutenis', surname: 'Turcinas', age: 33}, 'surname', 'lecturer');
// Expected result would be an object: {surname: 'lecturer', name 'Rutenis', age: 33}
const cloneObject = (obj, field, value) => {
  return {
    //return a new object with
    //all fields of obj
    ...obj,
    [field]: value,
    //field: value
  };
};

console.log(
  cloneObject(
    { name: "Rutenis", surname: "Turcinas", age: 33 },
    "surname",
    "lecturer"
  )
);

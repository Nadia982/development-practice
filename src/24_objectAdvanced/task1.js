//Topic: iterate through object fields

const person = {
  name: "Rutenis",
  surname: "Turcinas",
  pets: {
    dog: "Fido",
    cat: "Felix",
  },
};

const isObject = (val) => {
  if (!val) {
    return false;
  }
  return typeof val === "object";
};

// Create an arrow function with one argument (type object)
const printNameAndValue = (obj) => {
  // The function iterates through object fields and prints field name and value following the pattern:
  // field title: someName, value: someValue
  // E.g. call that function, passing objects with fields (name: 'Rutenis', surname: 'Turcinas'), it prints two lines:
  // field title: name, value: Rutenis
  // field title: surname, value: Turcinas
  // Bonus (nice to have): fn prints all nested fields (obj has a field, whose value is an obj, etc.)
  for (let val in obj) {
    if (isObject(obj[val])) {
      printNameAndValue(obj[val]);
    } else {
      console.log(`field title: ${val}, value: ${obj[val]}`);
    }
  }
};

printNameAndValue(person);

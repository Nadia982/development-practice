// Topic: object transformation

// Create an object person with fields
// name (your chosen value)
// surname (your chosen value)
// age (your chosen value)
// birthDate (your chosen value)

const person = {
  name: "Noura",
  surname: "Hassan",
  age: 28,
  birthDate: "15 July 1994",
};

// Create an arrow function with one argument (person)
const transformedPerson = (person) => {
  // Function returns a new object - transformed person
  // Field fullName is combined of person.name and person.surname
  // Field nickname is combined of person.surname and person.age
  return {
    fullName: `${person.name} ${person.surname}`,
    nickname: `${person.surname} ${person.age}`,
  };
};

console.log(transformedPerson(person));

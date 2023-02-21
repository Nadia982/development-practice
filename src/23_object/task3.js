// 1. Create a constant complexObject and assign an empty object to that constant
// 2. Assign a field person to the complexObject (use direct access to the field: complexObject.person).
// Field person value is another object with fields:
//         1. name (your chosen value)
//         2. email (your chosen value)
//         3. birthDate (your chosen value)
// 3. Assign a field academy to the complexObject (use square brackets access to the field: complexObject['academy']).
// Field academy value is another object with fields:
//         1. title (your chosen value)
//         2. numberOfStudents (your chosen value)
// 4. Create an arrow function with one argument (complexObject),
// that function prints to the console person name, and academy title, following pattern: Rutenis - devMentor

const complexObject = {};
complexObject.person = {
  name: "Elsa",
  email: "elsa@holly...",
  birthDate: "1 Jan 2000",
};
complexObject["academy"] = {
  title: "FreeCodeCamp",
  numberOfStudents: 5000000,
};

const printNameAndAcademy = (obj) =>
  console.log(`${complexObject.person.name} - ${complexObject.academy.title}`);

printNameAndAcademy(complexObject);

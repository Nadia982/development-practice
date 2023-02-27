// 1. Create a constant human and assign an object to that constant
// 2. The object has fields (with your chosen initial values):
//         1. firstName (string value)
//         2. lastName (string value)
//         3. age (number value)
//         4. isDeveloper (boolean value)
// 3. Create an arrow function printHuman which accepts an object and prints to the console object fields following pattern:
// firstName lastName (age) is developer
// 4. E.g. if we call that function with a human object, which has fields (Rutenis, Turcinas, 33, false),
// the console will have printed line: Rutenis Turcinas (30) is not a developer

const human = {
  firstName: "Bertie",
  lastName: "Denning",
  age: 28,
  isDeveloper: false,
};

const printHuman = (human) => {
  if (human.isDeveloper === true) {
    console.log(
      `${human.firstName} ${human.lastName} (${human.age}) is a developer`
    );
  } else {
    console.log(
      `${human.firstName} ${human.lastName} (${human.age}) is not a developer`
    );
  }
};

printHuman(human);

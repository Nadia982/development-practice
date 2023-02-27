// Topic: destructuring object fields

// Create an arrow function with one argument - object
// You need only one field title from that object.
// Destruct function argument to take only needed field
// Print that field title to the console

const destructureObject = ({ title }) => console.log(`${title}`);

// Call that function passing 2 different objects:
// One object has 3 fields (one of them is title)
// Another object has 2 fields (one of them is title)

const object1 = {
  title: "cat",
  isPet: "yes",
  eatsMice: "yes",
};

const object2 = {
  title: "tiger",
  isPet: "no",
};

destructureObject(object1);
destructureObject(object2);

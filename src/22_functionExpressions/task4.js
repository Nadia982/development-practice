//     1. Create an arrow function fn with rest parameters. It enables to call function with various amount of arguments
//     2. Function fn counts how many arguments has a space and returns that number
//     3. E.g. fn('dev Mentor', 'devMentor', ' '); Returns 2, because 2 arguments has a space
//     4. E.g. fn('a', 'b', 'c', 'd', 'e', 'f'); Returns 0, because 0 arguments has a space

fn = (...theArgs) => {
  let withSpace = 0;
  for (let i = 0; i < theArgs.length; i++) {
    if (theArgs[i].includes(" ")) {
      withSpace++;
    }
  }
  return withSpace;
};

console.log(fn("dev Mentor", "devMentor", " "));
console.log(fn("a", "b", "c", "d", "e", "f"));

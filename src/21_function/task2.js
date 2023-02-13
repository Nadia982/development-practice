// 1. Create a function with one parameter (string type)
// 2. This function returns transformed string: every second letter is upper case,
// e.g. function was called passing 'devMentor' the result should be: 'DeVmEnToR'

function alternatingUpperCase(a) {
  let result = "";
  for (i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      result += a[i].toUpperCase();
    } else {
      result += a[i].toLowerCase();
    }
  }
  return result;
}

console.log(makeEvensUpperCase("devMentor")); //DeVmEnToR

//     1. Iterate from 1 to 10 inclusive
//     2. Inside the loop use switch expression with cases defined below:
//         1. Number is 1 or 2 or 3 - print to the console: Small number
//         2. Number is 4 or 5 - print to the console: Normal number
//         3. Default case: print to the console: big number

for (let i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
    case 2:
    case 3:
      console.log("Small number");
      break;
    case 4:
    case 5:
      console.log("Normal number");
      break;
    default:
      console.log("big number");
  }
}

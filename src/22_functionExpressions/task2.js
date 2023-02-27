//     1. Create an arrow based function with one argument, which has a default value string: 'None was passed'
//     2. Function prints to the console that argument
//     3. Call that function without arguments
//     4. Call that function, with a null value
//     5. Call that function with string value 'devMentor'

const arrowBasedFunction = (arg = "None was passed") => console.log(arg);

arrowBasedFunction();
arrowBasedFunction(null);
arrowBasedFunction("devMentor");

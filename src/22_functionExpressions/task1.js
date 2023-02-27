//     1. Create a function declaration fn1 which prints to the console: Function declaration
function fn1() {
  console.log("Function declaration");
}

//     2. Create an anonymous function that prints to the console: Anonymous function expression
const anon = function () {
  console.log("Anonymous function expression");
};

//     3. Assign that anonymous function to the constant fn2
const fn2 = anon;

//     4. Create an arrow based function that prints to the console: Arrow based function
//     5. Assign it to the constant fn3
const fn3 = () => console.log("Arrow based function");

//     6. Call all 3 functions and verify console output
fn1();
fn2();
fn3();

// There’s a variable value. We don’t know what type is it. Implement the following requirements.

// If value type is boolean - print to the console: {{Variable is boolean: }} and append variable value to the end

// If it’s not, then if it’s a number - print to the console: {{Variable is a number. It's square is: }} and append calculated square of that number

// If it’s not, then if it’s a string - print to the console: {{Variable is a string: }} and append variable value.

// Else - print to the console: {{Variable type is: }} and append variable type.

const a = true;
if (typeof a === "boolean") {
  console.log("Variable is boolean: " + a);
} else if (typeof a === "number") {
  console.log("Variable is number: " + a);
} else if (typeof a === "string") {
  console.log("Variable is string: " + a);
} else {
  console.log("Variable type is " + typeof a);
}

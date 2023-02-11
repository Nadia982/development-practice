// Define a constant a with an initial value - random word

// Implement these requirements:

// If string is longer than 6 and first letter is uppercase - print to the console: Long uppercase word

// If string is shorter or equal and first letter is lowercase - print to the console: Short lowercase word

// Else print: Short uppercase or long lowercase

const a = "Salamander";
if (a.length > 6 && a[0] === a[0].toUpperCase()) {
  console.log("Long uppercase word");
} else if (a.length <= 6 && a[0] === a[0].toLowerCase()) {
  console.log("Short lowercase word");
} else {
  console.log("Short uppercase or long lowercase");
}

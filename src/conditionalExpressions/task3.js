// Create variables a, b, c, d, e and
//assign values: undefined, null, empty string, string with one space, string '1', number 5

// Write conditional expressions for each variable to print to the console true or false:
//console.log(variable ? 'true' : 'false');

// Try to guess printed values

// Analyze the result and remember, because such expression will be used very often to verify if a variable has value or not

const a = undefined;
console.log(a ? "true" : "false");
// I predict this will be false;

const b = null;
console.log(b ? "true" : "false");
// I predict this will be false;

const c = "";
console.log(c ? "true" : "false");
// I predict this will be false;

const d = " ";
console.log(d ? "true" : "false");
// I predict this will be true, because the string contains a space, so it is not empty.

const e = "1";
console.log(e ? "true" : "false");
// I predict this will be true, because it is not an empty string;

const f = 5;
console.log(f ? "true" : "false");
// I predict this will be true, because 5 is truthy;

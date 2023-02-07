// Define variables: a, b, c, d

// Assign initial values: undefined, null, 0, 5

// Print to the console expression: a || b || c || d

// Print to the console expression: a ?? b ?? c ?? d

// Guess the result and verify by executing the code

const a = undefined;
const b = null;
const c = 0;
const d = 5;

console.log(a || b || c || d);
//I predict this will print 5 (the first truthy value)

console.log(a ?? b ?? c ?? d);
//I predict this will print 0 (the first value that is neither null nor undefined)

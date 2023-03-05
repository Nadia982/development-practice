// Topic: object rest fields

// Create an arrow function with two arguments: objectA, objectB
// The function returns one object which contains all fields from objectA and objectB
// Use rest fields operation

const returnAllFields = (objectA, objectB) => ({ ...objectA, ...objectB });

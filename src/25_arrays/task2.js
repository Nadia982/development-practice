// Topics: create an array

// Create an empty array
const arrEvenIndices = [];

// Iterate through string letters: devMentor - path to the developer career
const string = "devMentor - path to the developer career";

// Push a letter to the array if index is even
for (let i = 0; i < string.length; i++) {
  if (i % 2 !== 1) {
    arrEvenIndices.push(string[i]);
  }
}

// ** Bonus push a letter to another array if index is prime
// primes = numbers that can only be divided evenly by 1 and the number itself
// primes between 1 and 100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
const primeIndices = [];

let num = string.length;

for (let i = 2; i < num; i++) {
  isPrime = 1;

  for (var j = 2; j <= i / 2; j++) {
    if (i % j === 0) {
      isPrime = 0;
      break;
    }
  }
  if (isPrime === 1) {
    primeIndices.push(string[i]);
  }
}

// Print array to the console
console.log(arrEvenIndices);
console.log(primeIndices);

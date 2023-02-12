// 1. Create a constant course with an initial value: 'Fundamentals'
// 2. Iterate through course letters and count how many a letters are in the word
// 3. Print the amount of letters a after iteration

const course = "Fundamentals";
let countOfLetterA = 0;
for (let i = 0; i < course.length; i++) {
  if (course[i].toLowerCase() == "a") {
    countOfLetterA++;
  }
}

console.log(countOfLetterA);

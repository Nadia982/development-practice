//     1. Create a constant academy and assign an object to that constant
//     2. The object has following fields:
//         1. title: 'devMentor'
//         2. course: 'fundamentals'
//         3. mentorship: true
//     3. Print to the console academy title using direct access: academy.title
//     4. Print to the console academy course using square brackets: academy['course']

//     5. Create a constant propertyName and assign an initial value: mentorship
//     6. Print to the console academy mentorship using square brackets with constant propertyName
//     7. Delete field course from the object academy
//     8. Print field course to the console (verify, that i'’s undefined after delete

const academy = {
  title: "devMentor",
  course: "fundamentals",
  mentorship: true,
};

console.log(academy.title);
console.log(academy["course"]);
const propertyName = "mentorship";
console.log(academy[propertyName]);
delete academy.course;
console.log(academy.course);

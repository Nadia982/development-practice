//     1. Create an arrow based function and assign it to the constant fn
//     2. Function fn returns a function which returns a string value: 'devMentor short function'

const fn = () => () => "devMentor short function";

console.log(fn());

//     3. Create another arrow based function fn2
//     4. Function fn2 has one argument p - reference to another function
//     5. Function fn2 does call a function p and returns the result
//     6. Call function fn2 like that: fn2(fn()) and print the result to the console
//     7. Note: all function implementations should be the shortest way, without {{{}}}

const fn2 = (p) => p();

console.log(fn2(fn()));

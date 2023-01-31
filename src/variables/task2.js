let a = 25;
let b;
let c = null;
b = a;
a = c;

console.log(a);
console.log(b);
console.log(c);

//I predict that the results will be:
// a = null, because a = c = null (line 5 then line 3);
// b = 25, because b = a = 25 (line 4 then line 1);
// c = null, because c = null (line 3).

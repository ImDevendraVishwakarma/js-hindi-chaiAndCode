let a = 1;
let b = 2;
let c;

console.log("Before");
console.log("Value of a : "+a);
console.log("Value of b : "+b +"\n");

c = a; 
a = b; 
b = c; 

console.log("After");
console.log("Value of a : "+a);
console.log("Value of b : "+b);
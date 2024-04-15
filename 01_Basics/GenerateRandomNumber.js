// Generate a random number
let a = Math.random() ;
console.log(a);

// Get a random number between 1 and 10
let b = Math.random() * (10-1) + 1;
console.log("Random value between 1 and 10 is : "+b);

// Get an integer value between 1 and 10
let c = Math.floor(Math.random() * (10-1) + 1);
console.log("Random integer value between 1 and 10 is : "+c);

// Generate a random number between 1 and 100 (inclusive)
let d = Math.floor(Math.random() * 100) + 1;
console.log("Random integer value between 1 and 100 is : "+d);
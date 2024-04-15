let number = 5;
number = Number(number);


if(isNaN(number)){
    console.log("You entered a string");
}
else if(number < 0){
    console.log("number is negative");
} 
else if(number > 0){
    console.log("number is positive");
}
else {
    console.log("number is zero");
}
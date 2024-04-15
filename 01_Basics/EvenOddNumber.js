let number = "abc";

number = Number(number);


if(isNaN(number)){
    console.log("You entered a string");
}
else if(number % 2 == 0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}
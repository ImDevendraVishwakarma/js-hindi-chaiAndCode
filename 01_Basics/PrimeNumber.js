let number = 23;
let count = 0;


for(let i=1; i < number; i++){
    if(number % i == 0){
        count++;
    }
}

if(count == 1){
    console.log(number+" is a Prime Number");
}
else{
    console.log(number+" is not a Prime Number");
}
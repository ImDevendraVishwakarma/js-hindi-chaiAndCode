const lowerNumber = 1;
const higherNumber = 100;

console.log("The prime numbers between "+lowerNumber+" and "+higherNumber+" are :");


for(let i = lowerNumber; i < higherNumber; i++){
    
    let count=0;

    for(let j=1; j < higherNumber; j++){
        if(i % j == 0){
            count = count+1;
        }
    }

    if(count == 2 || i == 1){
        console.log(i);
    }
}





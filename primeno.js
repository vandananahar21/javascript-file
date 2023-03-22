// prime number program
let num= 8 ;
if (num == 1){
    console.log("1 is neither prime number nor composite number.");
}
else if(num>1){
    for(i=2; i<num; i++){
        if(num % i==0){
            break;
        }
    }
if(i>1 &&num==1){
    console.log(`${num} is a prime number`);
}
else{
    console.log(`${num} is not a prime number`);
 }
}
else{
    console.log("the is not a prime nubmer.");
}

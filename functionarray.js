// to print the array in function
function printarray(arry){
    
    for(i=0; i<4; i++){
    console.log(arry[i]);
    }
}
printarray(["jack","john","jerry"])

// to print obj in function
function functionname(obj){
    if(typeof(obj)=='object')
     for(key in obj){         
        console.log(key,obj[key])
     }
     else{
        console.log(`type of obj is not an object its type is${typeof(object)}`)
     }
}
functionname({firstname:"vandana", lastname:"nahar"})
functionname('string 123 rty')



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

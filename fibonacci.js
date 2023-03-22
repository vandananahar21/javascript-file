// for loop fibnacci series
// a = 0;
// b= 1;
// for(i=0; i<5; i++)
// {
//     x=a+b;
//     a=b;
//     b=x;
//     console.log(b);
// }


// by function we are printing a fibinacci series
// by this we can print the single method

function fibonacci(num){
    num1=0;
    num2=1;

    for(i=0; i < num; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
console.log(fibonacci((6)));
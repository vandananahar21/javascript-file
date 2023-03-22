// function calling(x,y){
//     sum = x+y
//     console.log(sum)
// }
// calling(21,13)
// function greetings(){
//     console.log('hi i am callback function!!')
// }
// greetings()


// // how to callback the function in an function 
// function printElement(x){
//     return x
// }
// function getElement(x,z){
//     y= x(z)
//     console.log(y)
//     for(i=0;i<y.length; i++)
//     console.log(y[i])
// }
// getElement(printElement,[7,8,9,1])

// how to print an array which prints the number which is odd and even
function function_First(x){
    return x
}
function functionSecond(x,arr){
   y=x(arr)
    // arr=[1,2,3,4,5,6,7,8, 9]
    for(i=0; i<y.length; i++)
    {
        if(y[i]%2==0){
            console.log(`${y[i]}: is even`)
        }
        else{
            console.log(`${y[i]}: is odd`)
        }
    }
}
functionSecond(function_First,[1,2,3,4,5,6,7,8,9])



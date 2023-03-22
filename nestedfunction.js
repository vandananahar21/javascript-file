// nestedfunction syntax

// function functionname(){
//     // code
//     function functionname(){
//         // code
//     }
// }


function firstfunc(arr){
     let sum = 0;
    for(i=0; i<arr.length; i++)
    {
        sum = sum +arr[i];
        console.log(arr[i]);
       
    }
    function secondfunc(obj)
    {
        for(key in obj)
        {
            console.log(obj[key]);
        }
      
    }
    secondfunc({firstname:"vandana",lastname:"nahar"})
    // return sum
}

// to print the value of return sum is:
// vand=firstfunc([1,2,3,4,5])      take functionname into an array then we are printing the value of variable.
// console.log(vand)

    
console.log([firstfunc([1,2,3,4,5])])



function outsidefunc(x,y){
    
    function insidefunc(){
        return x * y;
    }
    return insidefunc();
}
console.log(outsidefunc(10,6));



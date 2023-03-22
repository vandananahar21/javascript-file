// arrow function is used to ease the function or it is a shorthand method

//  syntax of an arrow function

// let myfunction =(arg1,arg2,arg3) => {          arg1 are the arguments   and   myfunction is the name of the function
    // Statement(s)   body of function 
// }


obj ={
    "name": "meander",
    "training": "javascript",
    "getItem": ()=>{
        console.log("hello")
    }
}

console.log(obj["name"])   // bracket notation

console.log(obj.training)  // .accesor or dot notation
obj.getItem()
obj["getItem"]()


// let age = 25;
// let welcome= (age < 18) ? 
// () => console.log('you are an baby'):
// () => console.log('you are a adult');
// welcome();

// to add numbers through arrow function

// let sum=(a,b) =>{
//     let result = a+b;
//     return result;
// }
// let result1 = sum(5,7);
// console.log(result1);

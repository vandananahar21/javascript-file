// obj ={
//     "name": "meander",
//     "training": "javascript",
//     "getItem": ()=>{
//         console.log("hello")
//     }
// }

// console.log(obj["name"])   // bracket notation

// console.log(obj.training)  // .accesor or dot notation
// obj.getItem() //  calling the function
// obj["getItem"]()

function Get(x,y){
    return{
        "name" : "Vandana",
        "training" : "web development",
        "getValue" : (x,y) => 
        {
           sum= x+y;
           return sum 
        }
    }
}
returnGet = Get()
console.log(Get())
console.log(Get().getValue(40,70))



function printArray(arr)
{
    for(i=0; i<arr.length; i++){
        console.log(arr);
        return{
            length_of_array:arr.length,
            sorting:(arr)=> {  
                
                for(i=0; i<4; i++){
                    for(j=0; j<3; j++){
                        if(arr[i] < arr[j]){
                            temp = arr[i]
                            arr[i] = arr[j]
                            arr[j] = temp
                            
                console.log(arr)
                        }
                    }
                }
            }
        }
    }
}
jiovjeoijr = printArray([3,2,9,4,6,7,8])

console.log(jiovjeoijr)
console.log(jiovjeoijr.sorting([3,2,9,4,6,7,8]))
  

   
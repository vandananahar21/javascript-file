// it is sorted with the help of sort method
// arr=[1,2,3,4,7,9,6]
// console.log(arr.sort())


// arr1=[4,6,8,2,7,9]
// console.log(arr1.reverse())


// we solved the array (ascending) by using for loop
arr=[55,23,27,65,9,30,59,23]
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


// // program to print to an array in an descending order 
// arr1 =[13,21,98,1]
// for(i=0; i<4; i++){
//     for(j=0; j<3; j++){
//       if(arr1[i] > arr1[j]){
//         temp = arr1[i]
//         arr1[i] = arr1[j]
//         arr1[j] = temp
// console.log(arr1)
//     }
//  } 
// }
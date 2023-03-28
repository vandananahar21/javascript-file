//  studentname =["denies","hawk","stephen"];
//  Name=[];
//  Name.push(studentname);
//  console.log(Name);
 
// //  ... spread operator (it is used to copy the array)
//  Name1=[...studentname];
//  console.log(Name1);



// example of chaining 
// const food =[
//     {name:"banana",type:"fruit"},
//     {name:"apple",type:"fruit"},
//     {name:"chocolate",type:"cadburry"},
//     {name:"orange",type:"fruit"},
// ];
// // {} this braces only used for complex codes
// food.map(x=>console.log(x));
// food.map(item=>console.log(item.name))
// .reduce((result,fruit)=>{
//        result.push(fruit);
//        return[...new Set(result)];
// },[]
// );


function thislean(){
    this.x=23;
    function inner(){
        this.y=56
        return this.y
    }
    inner()
}
console.log(thislean())


// class dog{
//     name='vandana'
//     is = null
//     log(){
//         console.log(this)
//     }
//     bark(){
//         this.is='woffing'
//         this.log()
//         return this
//     }
// walk(){
//     this.is='walking'
//     this.log()
//     return this
// }
// }
// dog=new dog()
// dog.log()
// dog.walk().bark()
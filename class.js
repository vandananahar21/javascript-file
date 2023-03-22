// class is the keyword to create the class
// constructor is method inside a class gets called automatically each time an object is created.

// simply creating a class with constructor method
// class person{
//     constructor(name){
//         this.name=name;
//     }
// }
// person1 = new person('jack');
// person2 = new person('john');

// console.log(person.name);
// console.log(person.name);



// class User{
//     constructor(vandana,nahar,z){          
//         this.firstname = vandana,
//         this.lastname = nahar,
//         this.age = z,
//         this. fullname =()=>{
//             console.log(this.firstname+" "+ this.lastname)
//         }
//     }
// }
// vandana=new User("vandana","nahar",21)
// // console.log(vandana);
// console.log(vandana.fullname());

class person{
    constructor(name){
        this.name=name;
    }
    get personName(){  
        return this.name;
    }
    set personName(x){
        this.name=x;
    }
}

let person1 =new person ('jack');
console.log(person1.name);

person1.personName = 'sarah';
console.log(person1.name);


// // we make function in class then call the fucntion to print msg
// class pen{
//     constructor(name,color,price){
//         this.name = name;
//         this.color = color;
//         this.price = price;
//     }
//       showPrice(){
//         console.log(`price of ${this.name} is ${this.price}`);
//       }
// }
// // we are using new keyword with the pen constructor to create an object pen1
// const pen1 =new pen("marker","red","20");
// pen1.showPrice();



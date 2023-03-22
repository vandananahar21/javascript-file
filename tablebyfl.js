// multiple table upto 10 
const number=7

for(let i=1; i<=10; i++){
    const result = i * number;
    console.log(`${number} *${i} = ${result}`);
}


// (``)this is backtick charcter
// const number = 5

// for(let i=1; i<=10; i++){
//     const result=i*number;
//     console.log(`${number}*${i}=${result}`);
// }


// // two methods to print the string and number
// x= 'vandana'
// a = 10
// b = 25
// console.log('my name is', x)
// console.log(`my name is ${x}`)
// console.log('adding two numbers a and b', a+b)
// console.log(`my name is ${a} and ${b} is ${a+b}`)


// nested forloop
// for(i=1; i<=5; i++){
//     for(j=1; j<=5; j++){
//         console.log(i*j)
//     }
// }

let n = 5;
let string = "";
for(let i=0; i<=n; i++){
   
    string += "*";
    string += '\n'
   
}



// vertical table
string="";
for(i=1; i<=10; i++){
    for(j=1; j<=10; j++){
        string+=i*j
        string +=('\t')
    }
    string+=('\n')
}

  console.log(string)
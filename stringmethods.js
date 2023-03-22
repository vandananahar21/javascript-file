// length method is to measure the length 
/*text ="abcdefgfigkhlmnopqrstuvxyz";
console.log(text.length);

// Extracting String Parts  
/*There are 3 methods for extracting a part of a string:

 1. slice(start, end)
 2. substring(start, end)
 3. substr(start, length)*/

//  slice() extracts a part of a string and returns the extracted part in a new string.
/*favfruits ="apple,mango,kiwi";
console.log(favfruits.slice(-7));


// substring()The difference is that start and end values less than 0 are treated as 0 in substring().
str="bag,school,pen,pencil";
console.log(str.substring(7,13));

str1="desk,table,book,notebook";
console.log(str1.substr(7,6))

// The replace() method replaces a specified value with another value in a string
// use a regular expression with an /i flag(insensitive) 
text = "please visit microsoft!";
console.log(text.replace(/MICROSOFT/i,"w3school"));


//  replace() use a regular expression with an /g flag(global match)
text = "please visit microsoft and microsoft!";
console.log(text.replace(/microsoft/g,"w3school.com"))


// toUpperCase() method is for upper case letter
text ="my name is vandana";
console.log(text.toUpperCase());

// toLowerCase method is for lower letter
text ="HELLO HEY VANDANA HERE";
console.log(text.toLowerCase());


// concat() joins two or more strings
text1 ="hello";
text2 ="hey";
console.log(text1.concat("",text2))

// trim() method removes whitespace from both sides of a string:
text1 = "     hello world!     ";
console.log(text1.trimEnd());


// padStart() method pads a string with another string
text= "5";
console.log(text.padStart(6,"x"));
*/

let numb =5;
let text = numb.toString();
console.log(text.padStart(4,"0"));

let text1 = "5";
console.log(text1.padEnd(4,"0"));

let numb1 ="6";
let text2 = numb1.toString();
console.log(text2.padEnd(5,"M"));



/*There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ]
*/

// The charAt() method returns the character at a specified index (position) in a string:
 let text3 = "HELLO WORLD";
 console.log(text3.charAt(0));


//  charCodeAt() method returns the unicode of the character at a specified index in a string  (it will show the output in an ascii code which are already fixed)
let text4 = "HELLO WORLD";
console.log(text4.charCodeAt(0)); 

// Property access [ ] this will show index which is going to be print
let textnew ="HELLO WORLD";
console.log(textnew[0]);










 

// method for toString()
fruits=["banana","apple","mango"];
console.log(fruits.toString())


// join() is the method to join the string
fruits1=["banana","orange","pineapple"];
console.log(fruits1.join("*"))


// pop() is to remove the last element from an string
beverages=["tea","coffee","milk","juice"];
console.log(beverages.pop())
console.log(beverages)


// push()is to add the new element to an string
beverages1=["tea","coffee","milk","juice"];
console.log(beverages1.push("hh")); 
console.log(beverages1)         


// shift() to remove the element from beginning
dresses=["top","shirt","pants"];
console.log(dresses.shift());
console.log(dresses)


// unshift() to add new element to the string
fruits=["mango","apple","stawberry"];
console.log(fruits.unshift("berries"))
console.log(fruits)


// array start with index 0 
// it will replace it with first element
fruits=["apple","mango","kiwi"];
console.log(fruits[0]="banana")
console.log(fruits)


// measure the length of the string
fruits=["orange","apple","kiwi"];
console.log(fruits[fruits.length])


// delete() is to remove any element it will show empty item
colours=["black","yellow","red","orange"];
console.log(delete colours[0])
console.log(colours)


// concat() method is used to merging new array into existing array
arr =["1","2","3"];
mygirls = ["vandana","sam","jasmine"];
myboys = ["john","joe","linus"];
console.log(mygirls.concat(myboys));          // this will only merge two items
console.log(arr.concat(mygirls,myboys));     // this will concat more than two items


arr1 =["bhawna","xyz","abc"];           //  we can add new name also
console.log(arr1.concat("peter"))

// Splice() method adds new items to an array (in middle of an array)
colours = ["red","black","blue","pink"];
console.log(colours.splice(2,0,"lemon","kiwi"));
console.log(colours);


// slice() method slices out a piece of an array
favdish=["pizza","momos","samosa"];
console.log(favdish. slice(2,2,"lemon","kiwi"));
console.log(favdish.length);
console.log(favdish);


// string() method is print the element
drinks1 = ["coffee" , "tea","milk","water","juice"];
console.log(drinks1.toString());

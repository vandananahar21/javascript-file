string = "madam";
len =string.length;
msg ="it is palindrome";

for(i=0; i<len/2; i++){
    if(string[i] !== string[len -1 -i]){
        msg ="it is not a palindrome";
    }
}
console.log(`${string}:${msg}`);
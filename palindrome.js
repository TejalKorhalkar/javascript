console.log("========== palindrome string ==========");
function palindrome(str){
    let length =str.length-1;
    let mid = str.length/2;
    for(i=0;i<mid;i++){
        if(str.charAt(i)!= str.charAt(length-i)  ){
            console.log(`Given String: "${str}"`);
           return console.log(`Given string is not palindrome`);
        }    
    }
    console.log(`Given String: "${str}"`);
    return console.log(`Given string is palindrome`);    
}
palindrome("madam");
console.log("---------------------------------------");
palindrome("141");
console.log("---------------------------------------");
palindrome("sunday");
console.log("---------------------------------------");
palindrome("mom");
console.log("---------------------------------------");
palindrome("listen");
console.log("---------------------------------------");
palindrome("dad");
console.log("---------------------------------------");


console.log("============Operator B Assignment============");
console.log("------------------------------------------------------------------------");
console.log("01--> Greatest Number:");
var greatestNumber = function (num1, num2){
   console.log(`Given no.: ${num1},${num2}`); 
   var result = num1>num2 ? `Greatest no. is: ${num1}`: `Greatest no. is: ${num2}`;
   console.log(result);
}
greatestNumber ( 10, -10);
greatestNumber (800, 899);
console.log("------------------------------------------------------------------------");

console.log("02--> Even or Odd Number:");
var evenOrOddNum = function (arg){
    var result = arg%2==0 ? `'${arg}' is Even Number` : `'${arg}' is Odd Number`;
    return result;
}
var returnvalue = evenOrOddNum(29);
console.log(returnvalue);
var returnvalue = evenOrOddNum(44);
console.log(returnvalue);
var returnvalue = evenOrOddNum(0);
console.log(returnvalue);
var returnvalue = evenOrOddNum(101);
console.log(returnvalue);
console.log("------------------------------------------------------------------------");

console.log("03--> Even or Odd Length:");
var wordLength = function (word){
    var lengthOfWord = word.length;
    console.log(`Length of the word ${word} is: ${lengthOfWord}`);
    var result = word.length%2==0 ? `"${word}" has EVEN word length` : `"${word}" has ODD word length`;
    return result;
}
var returnValue = wordLength("JavaScript")
console.log(returnValue);
console.log("...................................................");
var returnValue = wordLength("Developer")
console.log(returnValue);
console.log("...................................................");
var returnValue = wordLength("Google")
console.log(returnValue);
console.log("========================================================================");
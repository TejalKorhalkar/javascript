console.log("============Operator Assignment============");
console.log("------------------------------------------------------------------------");
console.log("01--> Length of word and it's square");
function squareOfWordLength(arg){
    var split = arg.split("");
    var length = split.length;
    
    var square = length*length
    return `Square of word in "${arg}": ${square}`;
}
 var resultA = squareOfWordLength("JavaScript");
 console.log(resultA);
 var resultB = squareOfWordLength("Google Chrome");
 console.log(resultB);
 var resultC = squareOfWordLength("Developer Smart");
 console.log(resultC);
 console.log("------------------------------------------------------------------------");
 console.log("02--> Division and multiplication");
 var str = "I am Angular Developer"
 console.log(`Given string: ${str}`);
 function divAndMulti(){
    var str = "I am Angular Developer";
    var length = str.length;
    var split = str.split(" ");
    var lengthAfterSplit = split.length;
    var division = length/lengthAfterSplit;
    console.log(`Division of length of string to the count of string words is: ${division}`);
    var multi = length*lengthAfterSplit;
    console.log(`Multiplication of length of string with the count of string words is: ${multi}`);
 }
 divAndMulti()
 console.log("========================================================================");
  
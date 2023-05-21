console.log("============ Loop Assignment A ============");
console.log("------------------------------------------------------------------------");
console.log("01--> Count The Total No. of vowels :");
string = "I am very good IT Developer";
console.log(`Given string: "${string}"`);
count = 0;
for (let index = 0; index < string.length; index++) {
    var char= string.charAt(index);
    if(char == 'a' || char == "e" || char =="i" || char == 'o' || char == 'u' ||
       char == 'A' || char == "E" || char =="I" || char == 'O' || char == 'U'){
        // console.log(char);
        count++
       }    
}
console.log(`The total no. of vowels: ${count}`);
console.log("------------------------------------------------------------------------");

console.log("02--> Sum of the cube of the no. from 1 to 5 :");
function cubeOfNumbers(){
    var sum = 0;
for (let index = 1; index <= 5; index++) {
    var cube = index*index*index
    console.log(`cube of the ${index} : ${cube}`);
    sum= sum + cube ;
}
console.log(`Sum of the cube of the given numbers : ${sum}`)
}
cubeOfNumbers()
console.log("------------------------------------------------------------------------");

console.log("03--> Odd Position Characters :");
function oddPositionChars(string){
    console.log(`Given string: "${string}"`);
    var charAtOddpositions= "" ;
   
for (let index = 0; index <string.length; index++) {
    var char = string.charAt(index);
    if (index%2!==0 && char != " ") {
        
        // console.log(char);
        charAtOddpositions = charAtOddpositions.concat(char);
    } 
    
}
console.log(`Character at odd posiotions for given string : ${charAtOddpositions}`);
console.log("------------------------------------------------------------------------");
}
oddPositionChars("Hard work always pays back");

oddPositionChars("Soon I will be Angular IT Champ")
console.log("============Function Expression Assignment============");
console.log("------------------------------------------------------------------------");
console.log("01--> Square of the no. 5, 6, 25, 100");
var square = function (num){
    var result = num*num;
    console.log(`Square of ${num} is: ${result}`);    
}
    square(5);
    square(6);
    square(25);
    square(100);
console.log("------------------------------------------------------------------------");
console.log("02--> Check and log the type of function");
    var type = typeof square;
    console.log(`Type of function: ${type}`);
console.log("------------------------------------------------------------------------");
console.log("03--> Area of reactangle plot:");
var area = function(length, width){
    var areaOfReact = length*width;
    console.log(`Area of reactangle having length ${length} and width ${width}: ${areaOfReact}`);
}
    area(499,917)
console.log("------------------------------------------------------------------------");
console.log("04--> Swap values :"); 
    var swapValue = function (arg1, arg2){
        console.log(`Before swap: ${arg1}, ${arg2}`);
        var temp = arg1;
        arg1 = arg2;
        arg2=temp;
        console.log(`After swap: ${arg1}, ${arg2}`);

        console.log();
    }
    swapValue("Virat" , "Anushka");
    swapValue(1000 , 2000);
console.log("------------------------------------------------------------------------");
console.log("05-->  :");
var string = function(){
    var givenString = "JS the most popular language of internet"
    var length = givenString.length;
    // var trimspaces = givenString.trim( );
    // var lengthAftertrim = trimspaces.length;
    // var totalCharacter = length - lengthAftertrim
    console.log(`A. Total character: ${length}`);

    var charAtIndex6 = givenString.charAt(6);
    console.log(`B. Character at index 6: ${charAtIndex6}`);

    var charAtIndex11 = givenString.charAt(11);
    console.log(`C. Character at index 11: ${charAtIndex11}`);

    var lastCharacter = givenString.charAt(length-1);
    console.log(`D. Last Character using length property: ${lastCharacter}`);

    var charAtIndexStart = givenString.charAt(0);
    console.log(`E. first Character: ${charAtIndexStart}`);

    var wordsSplit = givenString.split(" ");
    var totalWords = wordsSplit.length;
    var square = totalWords*totalWords
    console.log(`F. Total words: ${totalWords} and Its square is ${square}`);


}
string()
console.log("========================================================================");


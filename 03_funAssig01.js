console.log("==========Function assignment==========");
console.log("--------------------------------------------------");
console.log("01--> Function with no arguments");
function name(){
    console.log("Name:","Rohit Sharma")
}
name();
function occupation(){
    console.log("Occupation:", "Cricketer")
}
occupation();
console.log("--------------------------------------------------");
console.log("02--> Function with arguments");
function personalDetails(firstName, lastName, collegeName){
    console.log("Personal Details:");
    console.log("Name:", firstName, lastName);
    console.log("College:", collegeName);
}
personalDetails("ABC", "XYZ", "M. G. College");
console.log("--------------------------------------------------");
console.log("03--> Function for swap values");
function swapValuesDude(arg1, arg2){
    var name1 = "Virat";
    var name2 = "Anushka";
    var num1 = 1000;
    var num2 = 2000;
    console.log("Before swap-->", arg1, arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2=temp;
    console.log("After swap-->", arg1, arg2);
}
swapValuesDude("virat", "Anushka");
swapValuesDude("1000", "2000");
console.log("--------------------------------------------------");
console.log("04--> Function for Addition");
function addThreeValues(value1, value2, value3){
    var addition = value1 + value2 + value3;
    console.log("Addition:", addition);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello" , "Good" , "Morning");
console.log("==================================================");
console.log("=================Filter Method Assignment =================");
const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given Array:`);
console.log(arrayNumbers);
console.log("-----------------------------------------------------------------------------------");

console.log(`01-->Find out all the numbers which are greater than 50 and log on console`);
const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);
console.log("-----------------------------------------------------------------------------------");

console.log(`02-->Find out all the even number and log on console`);
const arrayEven = arrayNumbers.filter( (element) => {
    return element%2==0;
} );
console.log(arrayEven);
console.log("-----------------------------------------------------------------------------------");

console.log(`03-->Find out all the odd numbers and log on console`);
const arrayOdd = arrayNumbers.filter( (element) => {
    return element%2==1;
} );
console.log(arrayOdd);
console.log("-----------------------------------------------------------------------------------");

console.log(`04-->Find out all the numbers which are multiple of 5`);
const arrayMultiOf5 = arrayNumbers.filter( (element) => {
    return element%5==0;
} );
console.log(arrayMultiOf5);
console.log("-----------------------------------------------------------------------------------");

console.log(`05-->Find out all numbers which are between 20 and 50`);
const arraynos = arrayNumbers.filter( (element) => {
    return (element>20) && (element<50);
} );
console.log(arraynos);
console.log("===================================================================================");

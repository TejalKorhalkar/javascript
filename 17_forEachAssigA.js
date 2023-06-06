console.log("============================== ForEach() with arrow function and callback Assignment ==============================");
let arrayNumbers= [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Given Array: `);
console.log(arrayNumbers);
console.log("-------------------------------------------------------------------------------------------------------------------");

console.log("01--> Log the array element with it's index using forEach() with arrow function");
arrayNumbers.forEach((element,index) => {
    console.log(`Element:${element}, Index:${index}`);
});
console.log("-------------------------------------------------------------------------------------------------------------------");

console.log("02-->  Find the positive numbers and log on console");
arrayNumbers.forEach((element) => {
    if (element>0) {
        console.log(`${element}`);
    }
});
console.log("-------------------------------------------------------------------------------------------------------------------");

console.log("03--> Find the negative numbers, add into new array and and log new array on console using arrow function ");
newArray = []
arrayNumbers.forEach((element) => {
    if (element<0) {
        newArray.push(element)
    }
});
console.log(newArray);
console.log("-------------------------------------------------------------------------------------------------------------------");

console.log("04-->  Find the even numbers and log on console using forEach() with arrow function ");
arrayNumbers.forEach((element) => {
    if (element%2==0) {
        console.log(element);
    }
});
console.log("-------------------------------------------------------------------------------------------------------------------");

console.log("05-->  Find the sum of all elements from arrayNumbers and log on sum value on console ");
let sum = 0;
arrayNumbers.forEach((element) => {
    sum = sum + element; 
});
console.log(`Sum of all elements: ${sum}`);
console.log("-------------------------------------------------------------------------------------------------------------------");

console.log("06--> Log the only even indexed array value on console. forEach() with arrow function prefered ");
arrayNumbers.forEach((element,index) => {
    if (index%2==0) {
        console.log(element);
    }
});
console.log("===================================================================================================================");
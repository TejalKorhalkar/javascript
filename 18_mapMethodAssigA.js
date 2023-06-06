console.log("========================================== Map Method Assignment ===========================================");
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("01--> Add 10 into each element and log new array result on console");
const newArray = [];
// arrayNumbers.forEach((element) => {
//     let newElement= element+10;
//     newArray.push(newElement)       
// });
const newArrayEle = arrayNumbers.map((element)=>{
    element = element+10;
    newArray.push(element);
})
console.log(newArray); 
console.log("------------------------------------------------------------------------------------------------------------");

console.log("02--> Square the each array element and log on console");
const squaredArray = [];
const square = arrayNumbers.map((element)=>{
    squareEle =  element*element;
    squaredArray.push(squareEle);
})
console.log(squaredArray);
console.log("------------------------------------------------------------------------------------------------------------");

console.log("03--> Add the index value into its corresponding each array element and log new array result on console");
const array =[];
const result= arrayNumbers.map((element,index)=>{
    let add = element + index
    array.push(add)
})
console.log(array);
console.log("============================================================================================================");
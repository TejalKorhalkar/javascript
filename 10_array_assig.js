console.log("============ Array Assignment============");
console.log("----------------------------------------------------------------------------");
const arrayFruit = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Given Array: ${arrayFruit}`);
console.log("01--> First And Last Element");
let LengthOfArray = arrayFruit.length;
let firstElement = arrayFruit[0];
console.log(`First Element of Given Array is : ${firstElement}`);
let lastElement = arrayFruit[LengthOfArray-1];
console.log(`Last Element of Given Array is : ${lastElement}`);
console.log("----------------------------------------------------------------------------");

console.log("02--> Add Element Papaya before Banana");
arrayFruit.unshift("Papaya");
console.log(arrayFruit);
console.log("----------------------------------------------------------------------------");

console.log("03--> Remove Mango From array");
let splice = arrayFruit.splice(LengthOfArray-1,1);
console.log(arrayFruit);
// console.log(splice);
console.log("----------------------------------------------------------------------------");

console.log("04--> Add Element Pinapple in last position");
arrayFruit.push("Pinapple");
console.log(arrayFruit);
console.log("----------------------------------------------------------------------------");

console.log("05--> Insert an Element Dragon Fruit Before Water Melon");
arrayFruit.splice(LengthOfArray-1, 0, "Dragon Fruit");
console.log(arrayFruit);
console.log("----------------------------------------------------------------------------");

console.log("06--> Replace an element Orange with Kiwi");
arrayFruit.splice(2, 1, "Kiwi");
console.log(arrayFruit);
console.log("----------------------------------------------------------------------------");

console.log("07--> Log the elements starting from index 1 to 4");
let slice = arrayFruit.slice(1,5);
console.log(slice);
console.log("----------------------------------------------------------------------------");

console.log("08--> Log the last 3 elements using length property ");
let splicep = arrayFruit.splice(LengthOfArray-1,LengthOfArray);
console.log(splicep);
console.log("----------------------------------------------------------------------------");
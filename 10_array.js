var arrayOfRollNumber =[67,56,78,90,60];
console.log(`Type of array :${typeof arrayOfRollNumber}`);

let lengthOfArray=arrayOfRollNumber.length;
console.log(`length of array is:${lengthOfArray}`);


//Accessing array element
const zerothzIndexValue=arrayOfRollNumber[0];
console.log(`zerothzIndexValue:${zerothzIndexValue}`);
////Accessing array element 90
const ThirdIndexValue=arrayOfRollNumber[3];
console.log(`ThirdIndexValue:${ThirdIndexValue}`);

//Accessing last array element
let arrayLength=arrayOfRollNumber.length;
 const lastElement=arrayOfRollNumber[arrayLength-1];
 console.log(`Last element:${lastElement}`);

 //adding  element last position
 arrayOfRollNumber.push(80);
 console.log(arrayOfRollNumber);
  //adding  element firstposition
  arrayOfRollNumber.unshift(50);
 console.log(arrayOfRollNumber);

 //remove element last position
 arrayOfRollNumber.pop();
 console.log(arrayOfRollNumber);

 //remove element first position
 arrayOfRollNumber.shift();
 console.log(arrayOfRollNumber);

 //push multiple element
 
 arrayOfRollNumber.push(69,89,59);
 console.log(arrayOfRollNumber);




var arrayOfRollNumber = [67,56,78,90,60,40];
//update array element
 arrayOfRollNumber[0]=888;
 console.log(arrayOfRollNumber);

//update the last ele 40 with value 77
arrayOfRollNumber[arrayOfRollNumber.length-1]=77;
 console.log(arrayOfRollNumber);

console.log("slice()");//portion remove from array
 var arrayOfRollNumber = [67,56,78,90,60,40,88];
 const slicedArray=arrayOfRollNumber.slice(3);
 console.log(slicedArray);

 const slicedArr=arrayOfRollNumber.slice(2,5);
 console.log(slicedArr);

 console.log("splice()");
 var arrayOfRollNumber = [67,56,78,90,60,40,88];
 const arrayspliced=arrayOfRollNumber.splice(3);
 console.log(arrayOfRollNumber);
 console.log(arrayspliced);

 var arrayOfRollNumber = [67,56,78,90,60,40,88];
 let arrspliced=arrayOfRollNumber.splice(2,5)
 console.log(arrayOfRollNumber);
 console.log(arrspliced);

 //splice for insertion by replacing elemnt
 var arrayOfRollNumber = [67,56,78,90,60,40,88];
 console.log(arrayOfRollNumber);
 arrayOfRollNumber.splice(2,0,666,444)
 console.log(arrayOfRollNumber);

 console.log(`==== Traversing array =====`);

 var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
 for (let index = 0; index < arrayNames.length; index++) {
     const element = arrayNames[index];
     console.log(element);
 }

 console.log(`------------ for in loop -----------------`);
for (const index in arrayNames) {
    console.log(arrayNames[index]);
}

console.log(`------------ for of loop -----------------`);
for (const element of arrayNames) {
    console.log(element);
}

console.log(`------- WAP to get even indexed element ------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
// WAP to get even indexed element
for (const index in arrayNames) {
   if (index%2==0) {
    console.log(`${arrayNames[index]}`);
   }
}
console.log(`---------- join() ------------`);
let names = arrayNames.join(", ");
console.log(names);


console.log(`------ Resize an array -------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
arrayNames.length = 3;
console.log(arrayNames);
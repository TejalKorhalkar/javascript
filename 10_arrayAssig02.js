console.log("============ Count Char Assignment ============");
console.log("------------------------------------------------------------------------");

const arrayNumbers= [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given Array: ${arrayNumbers}`);
console.log("------------------------------------------------------------------------");
console.log("01--> Total Elements:");
let lengthOfarray = arrayNumbers.length
console.log(`Total elements available in given array: ${lengthOfarray}`);
console.log("------------------------------------------------------------------------");

console.log("02--> First And Last element in given array:");
let firstElement = arrayNumbers[0]
let lastElement = arrayNumbers[lengthOfarray-1]
console.log(`First element: ${firstElement}`);
console.log(`Last element: ${lastElement}`);
console.log("------------------------------------------------------------------------");

console.log("03-->Third last element of given array :");
let thirdLastElement = arrayNumbers[lengthOfarray-3]
console.log(`Third Last element: ${thirdLastElement}`);
console.log("------------------------------------------------------------------------");

console.log("04-->Find the even numbers from given array :");

for (const index in arrayNumbers) {
    let element = arrayNumbers[index];
    if(element%2 == 0) {
        console.log(`Even Numbers from given array: ${[element]}`);
    }
        
    }
    console.log("------------------------------------------------------------------------");

console.log("05-->Find the odd numbers from given array :");
for (const index in arrayNumbers) {
    let element = arrayNumbers[index];
    if (element%2==1) {
        console.log(`Odd Numbers from given array: ${[element]}`);
        
    }
}
console.log("------------------------------------------------------------------------");

console.log("06-->Find the sum of the even positioned numbers from given array :");
let sumEvenPositioned = 0;
for (const index in arrayNumbers) {
    if (index%2==0) {
        // console.log(arrayNumbers[index]);
        sumEvenPositioned = sumEvenPositioned +arrayNumbers[index];
    }
    
}
    console.log(`Sum of the even positioned numbers from given array: ${sumEvenPositioned}`);
    console.log("------------------------------------------------------------------------");

console.log("07-->Find the sum of the odd positioned numbers from given array :");
let sumOddPositioned = 0;
for (const index in arrayNumbers) {
    if (index%2==1) {
        // console.log(arrayNumbers[index]);
        sumOddPositioned = sumOddPositioned +arrayNumbers[index];
    }
    
}
    console.log(`Sum of the Odd positioned numbers from given array: ${sumOddPositioned}`);
    console.log("------------------------------------------------------------------------");

console.log("08-->Find the sum of all elements in given array :");
let sumAllElements = 0;
for (const index in arrayNumbers) {
    let elements = arrayNumbers[index];
    sumAllElements = sumAllElements +arrayNumbers[index];
    }
    console.log(`Sum of all elements in the given array: ${sumAllElements}`);
    console.log("------------------------------------------------------------------------");

    console.log("09-->Numbers multiple Of 5 :");
    for (const index in arrayNumbers) {
        let element= arrayNumbers[index]
        if (element%5==0) {
            console.log(`Numbers multiple of 5: ${element}`);
            
        }
    }
    console.log("------------------------------------------------------------------------");

    console.log("10-->find if 115 includes in given array:");
    let includes = arrayNumbers.includes(115);
    console.log(`Is 115 availlable in given Array: "${includes}"`);
    console.log("------------------------------------------------------------------------");

    console.log("11-->find if 23 includes in given array:");
    let availlable = arrayNumbers.includes(23);
    console.log(`Is 23 availlable in given Array: "${availlable}"`);
    console.log("------------------------------------------------------------------------");

    console.log("12-->Insert numbers 55,66 before index 3:");
    let splice = arrayNumbers.splice(3,0,55,66)
    console.log(arrayNumbers);
    console.log("------------------------------------------------------------------------");

    console.log("13-->Delete 3 elements from index 4 :");
    let remove =  arrayNumbers.splice(4,3)
    console.log(arrayNumbers);
    console.log("========================================================================");
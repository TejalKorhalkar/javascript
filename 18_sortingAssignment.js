console.log("=========== JavaScript Logical Programme ===========");
const array = [10, 5, 'a', 'b', 'h', 11];
console.log(`Given Array:`);
console.log(array);

console.log('----------------------------------------------------');
console.log(`Sorting of Array with only Numbers `);
const arrayNum = [];
array.forEach(element => {
    if(typeof element === "number"){
        arrayNum.push(element);
    }
});

var sort = arrayNum.sort((n1,n2) =>{
    return n1 > n2 ? 1 : -1 ;
})

console.log(arrayNum);
console.log('----------------------------------------------------');
console.log(`Sorting of Array with only Alphabets `);
const arrayStr = [];
array.forEach(element => {
    if(typeof element === "string"){
        arrayStr.push(element);
    }
});
console.log(arrayStr);
console.log('====================================================');
console.log("============ Factorial Assignment============");
console.log("-----------------------------------------------");

function factorialOfNum(num){
    let factorial = 1;
    if(num == undefined || num == null || num == NaN || num<0){
        console.log(`'${num}' is Invalid input`);
        return;
    }else {
        if(num==0){
            console.log(`factorial of Zero is 1`);
           return; 
        }
        else{
            let factorial = 1;
        for (let index = num; index>=1; index--) {
        factorial = factorial * index;    
    }
    return factorial;
    }
        }                
}
var factorials = factorialOfNum(5);
console.log(`factorial of '5' is ${ factorials}`);
var factorialA = factorialOfNum(3);
console.log(`factorial of '3' is ${ factorialA}`);
var factorialB = factorialOfNum(null);
console.log(`factorial of 'null' is ${ factorialB}`);
var factorialC = factorialOfNum(8)
console.log(`factorial of '8' is ${ factorialC}`);
var factorialD = factorialOfNum(undefined)
// console.log(`factorial of 'undefined' is ${ factorialD}`);
var factorialE = factorialOfNum(9)
console.log(`factorial of '9' is ${ factorialE}`);
var factorialF = factorialOfNum(0)
// console.log(`factorial of '0' is ${ factorialF}`);


// factorialOfNum(5);
// factorialOfNum(3);
// factorialOfNum(null);
// factorialOfNum(8);
// factorialOfNum(undefined);
// factorialOfNum(9);
// factorialOfNum(0);
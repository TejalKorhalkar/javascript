console.log("============Arrow function Assignment============");
console.log("01-->With no args and no return value");
let ArrowFun = ()=>{
    console.log(`"Good Morning Today is Monday"`);
}
ArrowFun();
console.log("-------------------------------------------------------------");
console.log("02-->With 3 args and no return value");
let multi = (num1,num2,num3=1)=>{
    result= num1*num2*num3
    console.log(`Multiplication Of Given No.: ${result}`);
}
multi(5,5,2);
multi(10,4);
console.log("-------------------------------------------------------------");
console.log("03-->With 5 args and return value");
let add = (num1,num2,num3,num4,num5)=>{
    addition = num1+num2+num3+num4+num5;
    return addition;
}
var result = add(100,100,200,349,756);
console.log(`Addition of given numbers: ${result}`);
var resultStr = add("I am ", "learning ", "ES6 ", "features ", "in depth")
console.log(`Addition Of given words: "${resultStr}"`);
console.log("=============================================================");
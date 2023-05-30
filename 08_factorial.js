

// 5! = 5*4*3*2*1
let factorial = 1;
for (let index = 5; index >= 1; index--) {//index= 5 4 3 2 1 0
    factorial = factorial * index; // 120*1
}
console.log(`factorial ${ factorial}`);

//0! = 1

function factorialOfNum(num){
    if(num==0){
        console.log(`factorial of Zero is 1`);
        return;
    }
    let factorial = 1;
for (let index = num; index >= 1; index--) {//index= 5 4 3 2 1 0
    factorial = factorial * index; // 120*1
}
console.log(`factorial ${ factorial}`);
}
factorialOfNum(5);
factorialOfNum(6);
factorialOfNum(10);
factorialOfNum(0)

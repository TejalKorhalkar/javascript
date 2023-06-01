console.log("============ Fabonicci Series Assignment  ============");
let n1 = 0;
let n2 = 1; 
let next= n1+n2;
console.log(n1);
console.log(n2);
function fabonicci(num){
    for (let index = 0; index < num; index++) {
    
        next= n1+n2;
        n1=n2;
        n2=next
        
        console.log(next);
    }
    
}
fabonicci(10)


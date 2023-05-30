console.log("============ while Assignment============");
console.log("------------------------------------------------------------------------");

console.log("01-->WAP to print number from 5 to 15 by incrementing by 1");
let i=5; 
while (i<=15) { 
   console.log(i);
   i = i + 1;
}
console.log("------------------------------------------------------------------------");

console.log("02-->WAP to print number from 50 to 40 by decrementing by 1");
let j=50; 
while (j>=40) { 
   console.log(j);
   j = j - 1;
}
console.log("------------------------------------------------------------------------");

console.log("03-->WAP to find first 15 odd numbers");
let k=0;  
while (k<=30) { 
   if (k%2==1) {
      console.log(k);
   }
   k++; 
}
console.log("------------------------------------------------------------------------");

console.log("03-->WAP to find first 10 even numbers");
let l=1;  
while (l<=20) { 
   if (l%2==0) {
      console.log(l);
   }
   l++; 
}
console.log("------------------------------------------------------------------------");

console.log("04-->WAP to print the table of 5");
let m=1;  
while (m<=50) { 
   if (m%5==0) {
      console.log(m);
   }
   m++; 
}
console.log("------------------------------------------------------------------------");

console.log("05-->WAP to print the table of 10");
let n=1;  
while (n<=100) { 
   if (n%10==0) {
      console.log(n);
   }
   n++; 
}
console.log("------------------------------------------------------------------------");

console.log("05-->WAP to print the table of 10 in reverse");
let o=100;  
while (o>=10) { 
   if (o%10==0) {
      console.log(`${o}`);
   }
   o--; 
}
console.log("------------------------------------------------------------------------");

console.log("I am going to office");

var isTrafficToDailyRoute = false;
if(isTrafficToDailyRoute){
    console.log("Daily route");
}

console.log("Office");

var num1 = 13;
var isEven = num1%2==0;
if (isEven) {  
    console.log(` Even number: ${num1}`);
} else {
    console.log(` Odd number: ${num1}`);
}
console.log("After if else statement");

//If else

function marriageEligibility(age,gender,name){
    //Invalid Data
    if (age==null||age==undefined||gender==null ||gender==undefined) {
        console.log(`Invalid Input ${name} ${age} ${gender}`);
    } else {
        if (gender=="male"&& age<21||age>=90) {
            console.log(`Invalid Input ${name} ${age} ${gender}`);
            
        } else {
            if (gender=="female"&& age <18||age > 90) {
                console.log(`Invalid Input ${name} ${age} ${gender}`);
            } else {
                if (gender=="transgender") {
                    console.log(`Not allowed ${name} ${age} ${gender}as Indian constitution`);
                } else {
                    if (gender=="male") {
                        console.log(`You are eligible ${name} ${age} ${gender}`);
                    } 
                }
            }
        }
    }
}
marriageEligibility(null,"male","shyam");
marriageEligibility(undefined,"male","shyam");
marriageEligibility(31,null,"shyam");
marriageEligibility(31,undefined,"shyam");
marriageEligibility(20,"male","ritik");
marriageEligibility(120,"male","kritik");
marriageEligibility(16,"female","ritu");
marriageEligibility(98,"female","teju");
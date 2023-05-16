console.log("============Operator Ternary Assignment c ============");
console.log("------------------------------------------------------------------------");
console.log("01--> Male Marriage Eligibility:");
function maleMarriageElligibility (gender, age, boyName){
    var result =  gender=="male" && age>=21  ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
    return result;
}
var returnValue = maleMarriageElligibility("male", 25, "Bill Gates")
console.log(returnValue);
var returnValue = maleMarriageElligibility("male", 17, "Steve Jobs")
console.log(returnValue);

console.log("------------------------------------------------------------------------");
console.log("02--> Female Marriage Eligibility:");
function femaleMarriageElligibility (gender, age, girlName){
    var result =  gender=="female" && age>=18  ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are not eligible for marriage`;
    return result;
}
var returnValue = femaleMarriageElligibility("female", 16, "Jenifer");
console.log(returnValue);
var returnValue = femaleMarriageElligibility("female", 27, "Malinda Gates");
console.log(returnValue);
console.log("========================================================================");

console.log("============ Object Clone Assignment============");
console.log("------------------------------------------------------------------------------------------------------------------");console.log(`01--> Create the Object bankSbi `);
let bankSbi = {
    bankName:"SBI",
    location:"Pune",
    accountNo:1234567890,
    ifsc: "SBIN12345",
    interestRate:"6.5%",
}
console.log(`Object bankSbi Properties:`);
console.log(bankSbi);
console.log("------------------------------------------------------------------------------------------------------------------");

console.log(`02--> Create the Object bankLocation:`);
let bankLocation = {
    street: "M. G. Road",
    city: "Pune",
    pin: 430121,
}
console.log(`Object bankLocation Properties: `);
console.log(bankLocation);
console.log("------------------------------------------------------------------------------------------------------------------");
console.log(`03-->Clone the Step 1 and step 2 object :`);
let bankSbiCloned = {

}

let bankSLocationCloned = {
    
}
console.log(`Cloned from step 1: bankSbi object cloned to bankSbiCloned object`);
Object.assign(bankSbiCloned, bankSbi);
console.log(bankSbiCloned);
console.log("                                     ");
console.log(`Cloned from step 2: bankLocation object cloned to bankSLocationCloned object`);
Object.assign(bankSLocationCloned, bankLocation);
console.log(bankSLocationCloned);
console.log("------------------------------------------------------------------------------------------------------------------");
console.log(`04--> Create the Object rateOfInterest:`);
let rateOfInterest = {
    homeLoanInterest: "7%",
    personalLoanInterest: "7.5%",
    dueInterest: "8%",
}
console.log(`Object rateOfInterest properties are:`);
console.log(rateOfInterest);
console.log("------------------------------------------------------------------------------------------------------------------");

console.log(`05--> Merge the object from step 1, step 2 and step 4 into new object "sbiDetails":`);
let sbiDetails = {

}
Object.assign(sbiDetails, bankSbi, bankLocation, rateOfInterest);
console.log(`After merging object from step 1, step 2 and step 4 into Object sbiDetais:`);
console.log(sbiDetails);
console.table(sbiDetails);
console.log("------------------------------------------------------------------------------------------------------------------");

console.log(`06-->Traversing Object After Merge :`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}: ${element}`);
    }
}
console.log("------------------------------------------------------------------------------------------------------------------");

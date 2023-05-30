console.log("============ Object  Assignment E ============");
console.log("-----------------------------------------------------------------------------------------------------------------------------");
console.log("01-->SBI Details");
let sbiBank= {
    bankName:"SBI",
    location:"Pune",
    accountNo:1234567890,
    ifsc: "SBIN12345",
    interestRate:"6.5%",
    
}
sbiBank.showdetails = function(){
    console.log(`Details: bankName: ${sbiBank.bankName}, location: ${sbiBank.location}, accountNo: ${sbiBank.accountNo}, ifsc:${sbiBank.ifsc}, interestRate:${sbiBank.interestRate}`);
}
sbiBank.showdetails();
console.log("-----------------------------------------------------------------------------------------------------------------------------");


console.log("02-->AXIS Bank Details");
let axisBank= {
    bankName:"AXIS Bank",
    location:"Mumbai",
    accountNo:0987654321,
    ifsc: "AXIS12345",
    interestRate:"7.5%"
}
axisBank.showdetails = function(){
    console.log(`Details: bankName: ${axisBank.bankName}, location: ${axisBank.location}, accountNo: ${axisBank.accountNo}, ifsc:${axisBank.ifsc}, interestRate:${axisBank.interestRate}`);
}
axisBank.showdetails();
console.log("-----------------------------------------------------------------------------------------------------------------------------");


console.log("03-->HDFC Bank Details");
let hdfcBank= {
    bankName:"HDFC Bank",
    location:"Mumbai",
    accountNo:121212121212,
    ifsc: "HDFC12345",
    interestRate:"7%"
}
hdfcBank.showdetails = function(){
    console.log(`Details: bankName: ${hdfcBank.bankName}, location: ${hdfcBank.location}, accountNo: ${hdfcBank.accountNo}, ifsc:${hdfcBank.ifsc}, interestRate:${hdfcBank.interestRate}`);
}
hdfcBank.showdetails();
console.log("-----------------------------------------------------------------------------------------------------------------------------");

console.log("04-->YES Bank Details");
let yesBank= {
    bankName:"yes Bank",
    location:"Nashik",
    accountNo:44444444444444,
    ifsc: "YES12345",
    interestRate:"8%"
}
yesBank.showdetails = function(){
    console.log(` Details: bankName: ${yesBank.bankName}, location: ${yesBank.location}, accountNo: ${yesBank.accountNo}, ifsc:${yesBank.ifsc}, interestRate:${yesBank.interestRate}`);
}
yesBank.showdetails();
console.log("=============================================================================================================================");
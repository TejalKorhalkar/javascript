console.log("=========================== Object  Assignment D ===========================");
console.log("-----------------------------------------------------------------------------------------------------------------");
let professor = {
    name:  "Mina Rai",
    age: 35,
    gender: "female",
    city: "Pune",
    subject: "Basic Computing",
    degree:{
        enginnering: "csc", 
        phd: "Adv computing",
        Bsc: "Maths",
    },
    certificates: ["Hacker Rank Participation", "Certificate in IFE Course", "certificate in Advanced Programming"],
};
console.log("01-->object properties:");
console.log(professor);
console.log("------------------------------------------------------------------------------------------------------------------");
console.log("02-->Nested object Degree:");
console.log(professor.degree);
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("03-->Certificate array elements:");
console.log(professor.certificates);
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("04-->Total Degrees:");
function value(){
let concating = `Total Degrees are: Engineering:"${professor.degree.enginnering}",`+` PHD:"${professor.degree.phd}",`+` BSC:"${professor.degree.Bsc}"`
    // console.log(concating);
    return concating;   
}
let result = value();
console.log(result);
console.log("-----------------------------------------------------------------------------------------------------------------");

console.log("05-->Add new Property");
professor.totalExperience = "14 years"
console.log(`Total Experience: ${professor.totalExperience}`);
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("06-->Modifying Property");
professor.city = "Mumbai";
console.log(`Professor city: ${professor.city}`);
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("07-->Add one new certificate at end:");
professor.certificates.push("oracle certified");
console.log(professor.certificates);
console.log("-----------------------------------------------------------------------------------------------------------------");
console.log("08-->Last element at the array certificate:");
let length = professor.certificates.length;
let element = professor.certificates[length-1]
console.log(`Last element at the array certificate: "${element}"`);
console.log("=================================================================================================================");
// console.table(professor);


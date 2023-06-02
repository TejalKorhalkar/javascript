console.log("============Object clone Assignment============");
console.log("---------------------------------------------------------------------------------------");
const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(`Given Array: [${arrayNums}]`);
console.log(`01--> Perform Shallow Clone, Update cloned array and log original and cloned array`);
const newArray = arrayNums;
newArray.push(55,66);
console.log(`original Array: [${arrayNums}]`);
console.log(`Cloned Array: [${newArray}]`);
console.log("---------------------------------------------------------------------------------------");

console.log(`02--> Perform Deep Clone, Update original array and log original and cloned array`);
const clonedWithSpread = [...arrayNums];
arrayNums.push(10,25);
console.log(`original Array: [${arrayNums}]`);
console.log(`Cloned Array: [${clonedWithSpread}]`);
console.log("---------------------------------------------------------------------------------------");

console.log(`03--> Merge and concat array With Spread Operator and log Merged array`);
const otherArray = [2, 30, 14, 8]
console.log(`Other array : [${otherArray}]`);
const merged = arrayNums.concat(otherArray);
console.log(`Array after Merge: [${merged}] `);
console.log("---------------------------------------------------------------------------------------");

console.log(`04--> Create employee_info Object: `);
const employee_info = {
    emp_id: 27,
    emp_name: "Jhon Doe",
    salary:{
        july_month: "40,0000INR",
        aug_month:"50,0000INR",
        Jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91-8600-3456-88", "1800-4567-32", "+91-9096-5678-77"]
}
console.log(employee_info);
console.log("---------------------------------------------------------------------------------------");

console.log(`05--> log employee details: `);
console.log(`a--> Address: locality, city, State, Country:-`);
const empAddress= employee_info.address;
console.log(empAddress);
console.table(empAddress);
console.log("      ");
console.log(`b--> Mobile Numbers:-`);
const mob = employee_info.mobiles;
console.log(`Mobile No. : ${mob}`);
console.log("---------------------------------------------------------------------------------------");

console.log(`06--> Perform Deep Clone using JSON.stringfy():- `);
const deepClonedemployee_info = JSON.parse(JSON.stringify(employee_info));
console.log(`a--> Update Property july_month salary to 80k on cloned object:-`);
deepClonedemployee_info.salary.july_month = "80,000INR";
console.log(deepClonedemployee_info.salary);
console.table(deepClonedemployee_info.salary);
console.log("     ");
console.log(`b--> Update Property country to United Kingdom on original object:-`);
console.log(`Before updating country: "${employee_info.address.country}"`);
employee_info.address.country= "United Kingdom";
console.log(`After updating country: "${employee_info.address.country}"`);
console.log("             ");
console.log(`c--> Updated values of original and cloned object:-`);
console.log(`Updated salary of july_month: "${deepClonedemployee_info.salary.july_month}"`);
console.log(`Updated Country: "${employee_info.address.country}"`);
console.log("=======================================================================================");
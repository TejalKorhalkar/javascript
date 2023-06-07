console.log("============================= Map Method Assignment B =============================");
class Employee {
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }
}
const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS"); 
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");
const array= [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`01-->Get the list of all employee names & log new array on console`);
const arrayName= [];
const arrayNames= array.map((Employee)=>{
    arrayName.push(Employee.emp_name)
     return arrayName;
})
console.log(arrayName);
console.log("-----------------------------------------------------------------------------------");


console.log(`02-->Get the list of departments & log on`);
const arrayDept= [];
const arrayDepts= array.map((Employee)=>{
    arrayDept.push(Employee.emp_dept)
     return arrayDept;
})
console.log(arrayDept);
console.log("-----------------------------------------------------------------------------------");

console.log(`03--> Get the list of employee id's and log on console`);
const arrayId= [];
const arrayIds= array.map((Employee)=>{
    arrayId.push(Employee.emp_id)
     return arrayId;
})
console.log(arrayId);
console.log("===================================================================================");

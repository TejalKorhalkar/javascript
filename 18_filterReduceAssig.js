console.log("===================filter Reduce Assignment======================");

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
const arrayEmps= [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("01--> Find all the employees from 'Wipro' company");
const array= arrayEmps.filter((Employee)=>{
    return Employee.emp_company=="Wipro";
   
})
const arrayEmp=array.map((Employee)=>{
    return Employee.emp_name  
})
console.log(arrayEmp);console.log("-----------------------------------------------------------------------------------");

console.log("02-->Find all the employees from 'IT' OR 'HR' dept");
const arraydept= arrayEmps.filter((Employee)=>{
    return (Employee.emp_dept=="IT") || (Employee.emp_dept=="HR");    
})
const arrayDep=arraydept.map((Employee)=>{
    return Employee.emp_name  
})
console.log(arrayDep);
console.log("-----------------------------------------------------------------------------------");

console.log("03--> Find all the employees whose emp id's are greater than 50");
const arrayId= arrayEmps.filter((Employee)=>{
    return Employee.emp_id>50;    
})
const arrayIds=arrayId.map((Employee)=>{
    return Employee.emp_name  
})
console.log(arrayIds);
console.log("-----------------------------------------------------------------------------------");

console.log("04-->  Find all the employees whose names start with letter 'A' or 'V' or 'M' ");
const arraylet= arrayEmps.filter((Employee)=>{
    return Employee.emp_name.startsWith("A") || Employee.emp_name.startsWith("V") || Employee.emp_name.startsWith("M") ;
})
const arrayLetter=arraylet.map((Employee)=>{
    return Employee.emp_name  
})
console.log(arrayLetter);
console.log("-----------------------------------------------------------------------------------");

console.log(`05--> Find the average salary of the employee for all the department`);
const empSalaries = arrayEmps.map( (Employee) => {
    return Employee.emp_salary;
});

const sumSalary =empSalaries.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
const avg = sumSalary/arrayEmps.length;
const totalAvg= avg.toFixed(3)
console.log(totalAvg);
console.log("-----------------------------------------------------------------------------------");

console.log("06--> Find the average salary for 'IT' department");
const itSalary = arrayEmps.filter((Employee)=>{
    return Employee.emp_dept=="IT"
})
const itempSalaries = itSalary.map( (Employee) => {
    return Employee.emp_salary;
});
const sumSalaryIt =itempSalaries.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
const average = sumSalaryIt/itSalary.length;
console.log(average);
console.log("===================================================================================");

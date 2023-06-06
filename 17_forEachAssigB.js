console.log("======================================================== ForEach employee details Assignment ======================================================");

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
console.log("01--> Find out the 'TCS' employee details and log only name & company on console");
array.forEach((Employee) => {
    if (Employee.emp_company=="TCS") {
        console.log(`Employee Name: ${Employee.emp_name}, Company: ${Employee.emp_company}`);
    }
});
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------");

console.log("02--> Find the employees with salary greater than or equal 50000");
array.forEach((Employee) => {
    if (Employee.emp_salary>=50000) {
        console.log(`Employee ID:${Employee.emp_id}, Employee Name:"${Employee.emp_name}", company Name: "${Employee.emp_company}", Dept: "${Employee.emp_dept}",  Salary: '${Employee.emp_salary}'`);
    }
});
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------");

console.log("03--> Find the sum of all employees salary and log on console");
let sum=0;
array.forEach((Employee) => {
    sum=sum+ Employee.emp_salary;   
});
console.log(`The sum of all employees salary: ${sum}`); 
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------");

console.log("04-->  Find the average salary and log on console ");
let arrayLength = array.length
let avgSalary = sum/arrayLength;
avgSalary = avgSalary.toFixed(3)
console.log(`Average Salary: ${avgSalary}`);
console.log("---------------------------------------------------------------------------------------------------------------------------------------------------");

console.log("05-->  Find the 'IT' OR 'HR' department employees whose salary is greater than or equal to 75000 and log complete employee details on console ");
array.forEach((Employee) => {
    if ((Employee.emp_dept=="IT" || Employee.emp_dept=="HR")&&(Employee.emp_salary>=75000)) {
        console.log(`Employee ID:${Employee.emp_id}, Employee Name:"${Employee.emp_name}", company Name: "${Employee.emp_company}", Dept: "${Employee.emp_dept}",  Salary: '${Employee.emp_salary}'`);
    }
});
console.log("===================================================================================================================================================");
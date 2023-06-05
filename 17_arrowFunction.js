


console.log(`Arrow function with no arguments and no return value`);
let display = ()=> {
    console.log(`Display function...`);
}
display();


console.log(`Arrow function with arguments and no return value`);
let show = (id, name) => {
    console.log(`ID: ${id} Name: ${name}`);
    console.log(`Inside show function ...`);
}
show(22, "Bill");

console.log(`Arrow function with arguments and return value`);
let add = (num1, num2) => {
    let result = num1 + num2;
    return result;
}
let result = add(100, 200);
console.log(`Result is ${result}`);


class Employee {
    constructor(name, age, company, salary){
        this.name=name; 
        this.age=age; 
        this.company=company; 
        this.salary=salary; 
    }
}

const billObject = new Employee("Bill", 32, "Microsoft", 600);
const elonObject = new Employee("Elon", 54, "Tesla", 800);
const stewObject = new Employee("Stew", 32, "Apple", 900);

const array = [billObject, elonObject, stewObject ];

console.log(`Find all the employees working in ‘TCS’ and  log only employee names `);
for (const employee of array) {
    if (employee.name.startsWith("E")) {
        console.log(employee.name);
    }
    
}

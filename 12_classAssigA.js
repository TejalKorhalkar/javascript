
console.log("============ Class Assignment============");
console.log("------------------------------------------------------------------------------------------------------------------");
console.log("01--> Class FOr Vehicle");
class Vehicle {
    constructor (brand, model, colour, fuelType, mileage){
        this.brand = brand,
        this.model = model,
        this.colour = colour,
        this.fuelType = fuelType,
        this.mileage = mileage
    }
    showDetails(){
        console.log(`Vehicle Details are-> Brand: ${this.brand}, Model: ${this.model}, colour: ${this.colour}, Fuel Type: ${this.fuelType}, Mileage: ${this.mileage} `)
}
}
const ford = new Vehicle ("Ford", "EcoSport", "Black", "Petrol", "16 kmpl");
const kia = new Vehicle ("KIA", "Seltos", "Red", "Petrol", "20 kmpl");
const tata = new Vehicle ("TATA", "Nexon", "White", "petrol", "17 kmpl");
const honda = new Vehicle ("Honda", "HondaCity", "Grey", "petrol", "18kmpl");
const toyota = new Vehicle ("Maruti Suzuki", "WagonR", "Silver", "petrol", "19 kmpl");
const array = [ford, kia, tata, honda, toyota]
for (const element of array) {
    element.showDetails();
}
console.log("------------------------------------------------------------------------------------------------------------------");

console.log("02--> Class For College");
class College {
    constructor(collegeName, location, city, pin){
        this.collegeName = collegeName,
        this.location = location,
        this.city = city, 
        this.pin = pin
    }
}
const coep = new College("COEP", "Shivajinagar", "Pune", 411005);
const mgclg = new College("M. G. College", "Ramnagar", "Nashik", 421015);
const mit = new College("MIT", "Kothrud", "Pune", 411038);
const vjti = new College("VJTI", "Matunga Road", "Mumbai", 4000019);

function traverseObject(collegeObject){
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${key}: ${element}`);
            
        }
    }
}
traverseObject(coep);
console.log("------------------------------------------------------------------------------------------------------------------");
traverseObject(mgclg);
console.log("------------------------------------------------------------------------------------------------------------------");
traverseObject(mit);
console.log("------------------------------------------------------------------------------------------------------------------");
traverseObject(vjti);
console.log("==================================================================================================================");

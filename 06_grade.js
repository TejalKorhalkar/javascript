

console.log("============ Grade if-else Assignment============");
console.log("--------------------------------------------------------------");
function gradeCalculation(marks){
    
    if (marks==undefined || isNaN(marks) || 0>=marks || marks>100 ) { // undefined, null
        console.log(`Invalid marks: ${marks}, Please provide valid marks`);
    } else {
    //    console.log(`Valid marks : ${marks}`); 
       if (marks>=90) {
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
       } else {
        if(marks>=70 && marks<90){
            console.log(`Excellent Marks: ${marks} , Your Grade is A`);
        } else{
            if(marks>=50 &&marks<75){
                console.log(`Good Marks ${marks}:, Your Grade is B`);   
            } else {
                if (marks>=35 && marks<50){
                    console.log(`Marks are : ${marks} , Your Grade is c, Need Improvements `);  
                } else {
                    console.log(`Sorry you got ${marks} marks, You are failed`);

                }
            }
        }

        
       }
    }
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
// Handling invalid inputs
gradeCalculation(undefined);
gradeCalculation(null);
gradeCalculation(NaN);
console.log("====================================================================");
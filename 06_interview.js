console.log("============TCS Interview Eligibility (if-else)============");
console.log("------------------------------------------------------------------------");
var interviewEligibility = function (gradScore,hscScore,sscdScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscdScore>90) {
        console.log(`Congrats "${candidateName}" you are eligible for TCS interview`);
    } else {
        console.log(`Unfortunately "${candidateName}" you are not eligible for interview `);
    }
    console.log("------------------------------------------------------------------------"); 
}
interviewEligibility(80,86,90,"Tejal");
interviewEligibility(70,65,55,"Priyal");
interviewEligibility(60,79,88,"Sneha")
console.log("========================================================================");
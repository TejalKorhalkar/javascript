console.log("============TCS Interview Eligibility============");
console.log("------------------------------------------------------------------------");
var interviewEligibility = function (gradScore,hscScore,sscdScore,candidateName){
    var result = gradScore>=70 || hscScore>=80 || sscdScore>90 ? `Congrats "${candidateName}" you are eligible for TCS interview` : `Unfortunately "${candidateName}" you are not eligible for interview `;
    console.log(result);
    console.log("------------------------------------------------------------------------");
}
interviewEligibility(80,86,90,"Tejal");
interviewEligibility(70,65,55,"Priyal");
interviewEligibility(60,79,88,"Sneha")
console.log("========================================================================");
console.log("============ If Else Grade Assignment ============");
console.log("------------------------------------------------------------------------");
function voteEligibility(age){
    if(age==undefined || age==null || age<=0 || age>120  ) {
        console.log(`You have entered 'Invalid data' : "${age}" `);
    }else {
        if (age<18){
            console.log(`Your age is "${age}", you are 'not Eligible' for vote`);
    }  
    else {
        console.log(`Your age is "${age}", You are 'eligible' for vote`)
    } 
    }
    console.log("------------------------------------------------------------------------");
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);
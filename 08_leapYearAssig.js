
console.log("============ Leap Year Assignment============");
console.log("----------------------------------------------------------------------------");
var checkLeapYear = function (leapYear){

        if (leapYear%4==0 && leapYear!=undefined && leapYear!=NaN || leapYear%4==1|| leapYear%4==2 || leapYear%4==3){
            console.log(`"${leapYear}": is  valid input`);
            
        } else  {
            console.log(`"${leapYear}": is invalid input`);
        
        }if (leapYear%4==0) {
            console.log(`"${leapYear}": is a leap year`);
        }if(leapYear%4==1|| leapYear%4==2 || leapYear%4==3 ){
            console.log(`"${leapYear}": is not a leap year`);
        }
console.log("----------------------------------------------------------------------------");
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);


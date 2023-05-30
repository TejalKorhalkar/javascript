console.log("============ Count Char Assignment ============");
console.log("------------------------------------------------------------------------");
function countCharA(str) {
    console.log(`Given String: "${str}"`);
    // let lengthOfStr = str.length
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        
        var char = str.charAt(index)
            var split = str.split("")
        if(char=="a" || char =="A"){
            
            // console.log(char);
            count= count + 1;
            
        } 
        
    }
    
    return  count;
}
var count = countCharA("I AM Learning JavaScript, The Language of internet");
console.log(`Total count of 'a' and 'A'  : ${count}`);
console.log("------------------------------------------------------------------------");
var count = countCharA("My favourite movie is LAggAn")
console.log(`Total count of 'a' and 'A' : ${count}`);
console.log("------------------------------------------------------------------------");
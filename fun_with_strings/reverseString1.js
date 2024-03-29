// initialize a variable called someStr to some string of your choice
let someStr = "Hello World";
// create a named function that takes an argument str 
function reverseString(str) {
    // in the function reverse str
    str = str.split("").reverse().join("")
    // return str
    return str
}
// outside the function log the function and pass somestr

console.log(reverseString(someStr));


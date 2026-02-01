//what is error
// An error is an unexpected condition or issue that occurs during the execution of a program, causing it to behave unexpectedly or terminate prematurely. Errors can arise from various sources, such as invalid input, resource unavailability, or logical flaws in the code. In programming, errors are typically categorized into syntax errors, runtime errors, and logical errors. Proper error handling is essential to ensure that a program can gracefully recover from errors and provide meaningful feedback to users or developers.
//what is issue with error
//how to handle error
let a=10;
console.log("value of a is",a);
try{
console.log(s);
}catch(err){
    console.log(err.name);
    console.log("error caught:",err.message);
    //console.log(err.stack);
}
let b=20;
console.log("value of b is",b);
console.log("end of program");
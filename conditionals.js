//Create 2 variables, x and y, and assign them a number value.

// Using an if statement, print "Hello World" to the console if x is greater than y;

// Update the if statement to print "Goodbye World" to the console if x is not greater than y without modifying the existing condition.

// What are some examples of falsy values in JavaScript? zero, NaN, ""(empty strings),false, indefined

// What will the following code output to the console and why?

// let number1 = 8;
// let number2 = "9";

// if("0" === 0){
//     console.log("condition 1 is true")
// }else if(number1 > number2){
//     console.log("condition 2 is true")
// }else if(typeof number2 === "number"){
//     console.log("condition 3 is true")
// }else if(typeof number2 !== "number" && number1 > number2){
//     console.log("condition 4 is true")
// }else if("0" == 0){
//     console.log("condition 5 is true")
// }else{
//     console.log("no condition was true")
// }


// .....this will be the response
//     console.log("condition 5 is true")


// What is the difference between the == and === operator? What is the best practice to use and why?
// Best practice is to use === because ex: "1" == 1 would evaluate to true, one as a string is equal to one the Number.

// Refactor the if statement below to use a ternary operator:

// let addButter = true;
// let popcorn = "The popcorn is ready!";

// if(addButter) {
//     popcorn = "The popcorn is delicious!";
// } else {
//     popcorn =  "The popcorn is good but could use some butter :("
// }


// console.log( popcorn )
// What will the code below output and why?
// let soldOut = true;
// let onSale = true

// let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

// console.log(message);
// Refactor the code from the previous question to use an if statement to instead of ternary to set the message variable.
let x = 5,
    y = 10;
if(x>y){
    console.log('Hello World')
}else{
    console.log('goodbye!')
}
//Refactor code
let addButter = true;
let popcorn = "The popcorn is ready!";
let message = (addButter!==true ) ? 'The popcorn is delicious!' : 'The popcorn is good but could use some butter :(';
console.log( popcorn +' and ' +message )
//outpout and why?  false true "i did not get tickets" = because both did not evaluate to the "same value" so false is returned
let soldOut = true;
let onSale = true

let message2 = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";
console.log(message2);

let number1 = 8;
let number2 = "9";

if("0" === 0){
    console.log("condition 1 is true")
}else if(number1 > number2){
    console.log("condition 2 is true")
}else if(typeof number2 === "number"){
    console.log("condition 3 is true")
}else if(typeof number2 !== "number" && number1 > number2){
    console.log("condition 4 is true")
}else if("0" == 0){
    console.log("condition 5 is true")
}else{
    console.log("no condition was true")
}
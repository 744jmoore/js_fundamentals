//JavaScript Fundamentals Review Exercises: Part II

function greeting(){
    console.log('Hello World')
}
greeting();

function countingCharacters(input){
    if(input.length< 10){
        console.log(input.length)
    }else{
        console.log('The string '+ input + ' is too long')
    }
}
countingCharacters('testytester');

function difference(num1, num2){
if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    console.log("Inputs must be a number!")

}else{
    console.log(num1 -= num2)
}
}
difference(6,5);

//Results
// n0249281@VDDP35X-ECUGVVM MINGW64 ~/Desktop/fundamentals_js_part1 (master)
// $ node functions.js
// Hello World
// The string testytester is too long
// Inputs must be a number!

// n0249281@VDDP35X-ECUGVVM MINGW64 ~/Desktop/fundamentals_js_part1 (master)
// $ node functions.js
// Hello World
// The string testytester is too long
// 1
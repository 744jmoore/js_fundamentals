//JavaScript Fundamentals Review Exercises: Part II

function greeting() {
    console.log('Hello World')
}
greeting();

function countingCharacters(input) {
    if (input.length < 10) {
        console.log(input.length)
    } else {
        console.log('The string ' + input + ' is too long')
    }
}
countingCharacters('testytester');

function difference(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log("Inputs must be a number!")

    } else {
        console.log(num1 -= num2)
    }
}
difference(6, 5);

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
//////////////////////////////////
// Using the function expression syntax, create a new function named advancedGreeting.
/////////////////////////////////

// It should accept hour as a parameter
// If the hour is less than 12, return a "Good morning" greeting
// If the hour is between 12 and 18, return a "Good afternoon" greeting
// If the hour is between 18 and 24, return a "Good night" greeting
// All other values should return "Invalid hour input".
// Can we access variables created inside the scope of a function outside of that function? Can a function access variables created in a parent scope?
function advanceGreeting(hour) {
    if (hour < 12) {
        console.log('Good Morning');
    } else if (hour >= 12 && hour < 18) {
        console.log('Good afternoon');
    } else {
        console.log('Good Evening')
    }
}
advanceGreeting(18);
// Create 5 variables. All variables should be assigned a string value.
// Assign 1 variable a verb
// Assign 1 variable a noun
// Assign 1 variable an adjective
// Assign 1 variable a color
// Assign 1 variable a name
// Create a variable called madlib and assign it a string value.

// Use all the variables created in step one to construct a Madlib.
// Use the + operator for concatenation when building your Madlib.
// Use the appropriate escape characters to make sure each sentence in the Madlib appears on a new line.
// Print the Madlib to the console
// Create a variable called madlibLiteral. Refactor your Madlib using template literals and interpolation. Print the new variable to the console.

// Why would we want to convert a string to a number in JavaScript and what is one way to accomplish this?  the data may have been porovided as a string and need to be calculated.
// convert string to number using  Number.parseFloat('123.12');  passing the string '123.12'


let ver ='run',
noun='cat',
adjective='rusty',
color='blue',
pname='testy tester';

let Madlib = pname+ ' had a ' + color + ' and ' + adjective+ ' hammer that makes the ' +noun+ ' '+ver
console.log(Madlib)
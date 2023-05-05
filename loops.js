//Loops template
// Write a for loop that counts from 0 to 100, printing each number to the console.

// Write a for loop that counts from 0 to 100 in increments of 2, printing each number to the console.

// Write a for loop that counts down from 100 to 0, printing each number to the console.

// Write a for loop that counts from 0 to 50 but only prints the odd numbers that are multiples of 5 to the console.


for(let i=0;i<101;i++){
    
    console.log('Number1: '+ [i])
}

for(let i=100;i>=0;i-=1){
    console.log('Number2: '+ [i])
}

let total =0;

for(let i=0; i<=10;i++){
     total +=3
}
console.log(total)

let total1 =0;
let i=0
while(i<=10){
    total +=3
    i++
}
console.log(total1)
// Fizz Buzz Interview Question

// Write a loop that prints all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
for(let i=0; i<=100;i++){
    if(i % 3 ===0 & i % 5 ===0){
    console.log('FizzBuzz' + i)
    }
    else if(i % 3 === 0){
        console.log('Fizz' + i)
    } else if (i % 5 === 0){
        console.log('Buzz' + i)
        }else{
        console.log(i)
        }
    }
    

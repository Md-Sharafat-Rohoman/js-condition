/* 1111111111 */
const burgerPrice = 50;
if (burgerPrice > 400) {
    console.log('free coke')
}
else {
    console.log('30tk dia coke kinte hobe')
}
/* 22222222222 */
// BMI < 18.5, you are underweight.
// BMI >= 18.5 and BMI <=24.9, you are normal.
// BMI >=25 and BMI <= 29.9, you are overweight.
// Otherwise, you are obese.
const BMI = 20;
if (BMI < 18.5) {
    console.log('you are underweight')
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log('normal')
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log('overweight')
}
else {
    console.log(BMI)
}
/* 33333333333 */
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const math = 39;
if (math >= 90 && math <= 100) {
    console.log('over is best A+')
}
else if (math >= 80 && math <= 89) {
    console.log('best of A+')
}
else if (math > 70 && math <= 79) {
    console.log('A')
}
else if (math >= 60 && math <= 69) {
    console.log('A-')
}
else if (math >= 50 && math <= 59) {
    console.log('b+')
}
else {
    console.log(math)
}
/* 4444444444444 */
let yourScore = 85;
let friendScore = 75;

if (yourScore > 80) {
    // Inside your friend's score
    if (friendScore > 80) {
        console.log("Go for a lunch.");
    }
    else if (friendScore >= 60) {
        console.log("Tell your friend: Good luck next time.");
    }
    else if (friendScore >= 40) {
        console.log("Keep your friend's message unseen.");
    }
    else {
        console.log("Block your friend.");
    }
}
else {
    console.log("Go home and sleep. Act sad.");
}

/* 555555555555555 */
/* let num1 = 10;
let num2 = 5;
let result;

if (num1 > num2) {
    result = num1 * 2;
} else {
    result = num1 + num2;
}

console.log("Result:", result); */
let num1 = 20;
let num2 = 3;
let result;
if(num1 > num2){
    result = num1 * 2;
}
else{
    result = num1 + num2
}
console.log('result', result);



/* 666666666666666 */
let age = 25;
let isStudent = true; // set to true or false
let fare;

if (age < 10) {
    fare = 0;
} else if (isStudent) {
    fare = 800 * 0.5;
} else if (age >= 60) {
    fare = 800 * 0.85;
} else {
    fare = 800;
}

console.log("Ticket Fare:", fare + " tk");


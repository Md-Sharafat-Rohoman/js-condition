/* 1111111111 */
const burgerPrice = 50;
if(burgerPrice > 400){
    console.log('free coke')
}
else{
    console.log('30tk dia coke kinte hobe')
}
/* 22222222222 */
// BMI < 18.5, you are underweight.
// BMI >= 18.5 and BMI <=24.9, you are normal.
// BMI >=25 and BMI <= 29.9, you are overweight.
// Otherwise, you are obese.
const BMI = 20;
if(BMI < 18.5){
    console.log('you are underweight')
}
else if(BMI >= 18.5 && BMI <=24.9){
    console.log('normal')
}
else if(BMI >=25 && BMI <=29.9){
    console.log('overweight')
}
else{
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
if(math >= 90 && math <=100){
    console.log('over is best A+')
}
else if(math >= 80 && math <= 89){
    console.log('best of A+')
}
else if(math > 70 && math <=79){
    console.log('A')
}
else if(math >= 60 && math <=69){
    console.log('A-')
}
else if(math >= 50 && math <= 59){
    console.log('b+')
}
else{
    console.log(math)
}

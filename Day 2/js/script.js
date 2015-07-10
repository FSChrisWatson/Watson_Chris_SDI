/*
This is going to be a multi line comment
Christopher Watson
7/9/15
SDI Section 00
Day 2 coding Basics
 */

//alert("This is making sure our js file is connected!");

//This is a single lined comment
//Usually it will describe what comes right after it

/*
Multi lined comment
so anything in between the stars and slashes is ignored by the computer
 */

//Alert - gives the user information but returns NOTHING
//alert("Welcome to Compete Elite");

//console logging information
console.log("This is the console. Gotta get use to it!");

//Declare a variable
//In order to declare a variable you must start with var
var whatever; //just by putting var in the name you have declared a variable
//Define the variable
whatever = 45;
//Create a storage container = value ;

//Declare and define a variable
var a = 2;

//Send variable to console so we can see it.
console.log(a);

//lets change the value of a variable
a = 6;
console.log(a);

//Add 3 to the current value of a so write
a = a + 3;
//Then in order to check it on the browser use console.log
console.log(a);

//Create another variable
var b;
b = a + 3;

console.log(a);
console.log(b);


//Simple Math
//Find your Age

//Create variable for year born
var yearBorn = 1989;
var age = 2015 - yearBorn;
console.log(age);


//COMMENT OUT EVERYTHING BELLOW

//MATH!!
// + addition,subtraction-,mutiplication*,division/

//Find the area of a triangle
var width = 4;
var height = 5;

var areaTriangle = width * height / 2;
console.log (areaTriangle);

//Modulo is the %
//Doesn't give you a percentage but gives you the remainder
//Example
var remainder = 32%10;
console.log(remainder);

//So the remainder will be 2 in the console.log/browser

//Find out if even or odd
//Modulo by 2
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//If you put something even in then you will have a modulo of 0
//0 means even
//1 means odd


//Assignment operations

/*
= Assignment Operation - "is"
++ adds one to the current value of the variable
-- subtracts one from the current value of the variable
+= adds the value after it to the current value
-= Subtract Assignment Operator - subtracts the value after it
from the current value
/= Division Operator - divides by the current value
*= Multiplication Operator - multiplies by the current value
 */

var tester = 5;
tester ++; // tester = tester +1;
tester --; // tester = tester -1;
tester +=3; // tester = tester + 3;
tester -=6; // tester = tester - 6;
tester /3; // tester = tester / 3;
tester *6; // tester = tester * 6;
console.log(tester);





















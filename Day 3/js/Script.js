/*
Chris Watson
1/10/2015
Day 3 Coding
 */

// Single lined comment

//This is an alert
//alert("Testing to see if this is connected");

//Console.log - allows programmers to see information
console.log("This is the console.");


// Declare a variable
// Use the keyword of var
var whatever1;  // Declaration of a variable
whatever1 = 42; // Definition of a variable

console.log(whatever1);

// Declare and define a variable
var a = 2;
console.log(a);

//Simple math
a = a+3;
console.log(a);

var b;
b = a+3;
console.log(b);
console.log(a);

//Find our age
var yearBorn = 1989;

//age is calculated by current year minus year born
var currentYear = 2015;

var age = currentYear - yearBorn - 1;
console.log(age);

//Math
// +, -, *, /

//Find area of triangle
// 1/2 * base * height
var base = 8;
var height = 10;

var areaTriangle = 1/2 * base * height;
console.log(areaTriangle)

// Modulo - %
// Gives remainder
var remainder = 32%10;
console.log(remainder);

//Find it even or odd
//Modulo by 2  %2
// 1 if odd
// 0 if even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

//Assignment Operators
/*
 = Assignment
  ++ Adds 1 to the variable
 -- subtracts 1 from variable
 +- #number Addition Assignment
 -= #number Subtraction Assignment
  /= #number Division Assignment
  *= #number Multiplication Assignment
  */

var counter = 1;
counter++; // counter = counter + 1;
console.log(counter);

counter--; // counter = counter - 1;
console.log(counter);

counter +=3; //counter = counter +3;
console.log(counter);

counter -=2; // counter = counter -2;
console.log(counter);

counter /=2; // counter = counter /2;
console.log(counter);

counter *=4; // counter = counter *4;
console.log(counter);


//String - any text variable
// "is used at the beginning and end of the string"
//used to distinguish between variable name and random text
// Single quotes and Double quotes are both used, BUT most both math

var kermit = "Light Green";

var frogName = "kermit";

console.log(frogName);

//Double quote or Single quote?
//can use an escaping character \ backslash in front of the apostrophe
var phrase = 'I don\'t know';
console.log(phrase);

//Multi-lines by using \n - new line character
var phrase2 = "I don't know! \nYou never Know!";
console.log(phrase2);


//Boolean
//kind of light switch - either on or off
//true or false - Not "true" or "false"

var yes = true;

var nope = false;

//This is not a boolean
var wrong = "true";

//Order of Operations
// PEMDAS - Please Excuse My Dear Aunt Sally
// Parenthesis, exponents, multiplication, division, addition, subtraction

//Find quiz averages
var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 70;

//Average - add them up and divide how many they are
var average = (quiz1 + quiz2 + quiz3) /3;
console.log(average);

//Do not over use parenthesis
// var perimeter = (length*2) + (width *2);



















































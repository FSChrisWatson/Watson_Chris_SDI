/*
Christopher Watson
Section 00
7/11/15.
Prompts
 */

//alert("Testing to see if this works!");

//How to ask the user for information/input
var userInput = prompt("Enter your year of birth");
console.log(userInput);

var age = 2015 - userInput;
console.log("You are " + age + " years old.");

//Calculate the area of a rectangle

//**prompt the user for width
var width = prompt("Lets calculate the area of a rectangle. Please enter a width:");

//**Prompt the user for a height
var height = prompt("Please enter a height:");

//**Calculate the area using the user input
var area = width * height;
console.log("The area of your rectangle is " + area);
alert("The area of your rectangle is " + area);

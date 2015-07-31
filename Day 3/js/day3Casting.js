/*
 Christopher Watson
 7/11/15
 SDI Section 00
 Day 3 Expressions Homework
 */

//alert("Testing the js file");

//casting variables means treating one variable like another
var stringvar = "6";
var results = 7 + stringvar;
console.log("The results are "+results)+".";

//Number() - Treats what is inside of () like a number, if possible
var castingResults = 7 + Number(stringvar);
console.log(castingResults);

//Cast Numbers as Strings
//String()
var areaCode = 407;
var prefix = 555;
var lineNumber = 1234;

var phoneNumber = String(areaCode) + String(prefix) + String(lineNumber);
console.log("Your phone number is "+phoneNumber);

//*****************//All prompt() returns text strings!!!
var videoGamesCurrent = prompt ("How many video games do you currently own?");
while(isNaN(videoGamesCurrent) || videoGamesCurrent===""){
    videoGamesCurrent=prompt("Please only type numbers.\nHow many video games do you currently own?")
};
var gamesBought = prompt ("How many games did you buy today");
while(isNaN(gamesBought) || gamesBought===""){
    gamesBought=prompt("Please only type numbers.\nHow many games did you buy today?")
};
var totalGames = Number(videoGamesCurrent) + Number(gamesBought);
console.log("The total number number of games that you purchased is "+totalGames+".");

//Parsing Integers
//Looks through text strings and returns the first integer
//The first character in the text string must be the number
//Spaces are not converted
//If it can not convert it returns NaN(Not A Number)

var a = parseInt("40 years old");
console.log(a);

var b = parseInt("He is 40 years old");
console.log(b);

var c = Number("40 Years Old");
console.log(c);

//parseFloat allows you to have decimal places parseInt DOES NOT!!
var d = parseFloat("40.67 years old");
console.log(d);

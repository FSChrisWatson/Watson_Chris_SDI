/*
 Christopher Watson
 7/11/15
 SDI Section 00
 Day 3 Expressions Homework
 */

alert("Testing the js file");

//In order to tell the computer what to do you ask for input using
// prompt("");
prompt("Name your favorite Sports team.");


var orangeBins = [30, 500, 10002];

//How many oranges did we pick
var totalOranges = orangeBins [0] + orangeBins [1] + orangeBins [2];
console.log(totalOranges + " Oranges were picked in three days.");

//Average number of oranges picked
var averageOranges = totalOranges / 3;
//Instead of 3 put = totalOranges / orangeBins.length;

//length property of arrays
console.log(orangeBins.length);
console.log("The average number of oranges picked is " + averageOranges);

//_______________________________________________________________

//Calculate the area of a rectangle

//**prompt the user for width
var width = prompt("Lets calculate the area of a rectangle. Please enter a width:");

//**Prompt the user for a height
var height = prompt("Please enter a height:");

//**Calculate the area using the user input
var area = width * height;
console.log("The area of your rectangle is " + area);
alert("The area of your rectangle is " + area);


//_______________________________________________________________________

//*****************//All prompt() returns text strings!!!
//THIS IS CALCULATIONS , PROMPTS , AND CASTING
var videoGamesCurrent = prompt ("How many video games do you currently own?");
var gamesBought = prompt ("How many games did you buy today");
var totalGames = Number(videoGamesCurrent) + Number(gamesBought);
console.log(totalGames);

//*****Add This.. Make sure you use an alert
//If need help contact me
//Cast NUmbers as Strings
//String()
var areaCode = 407;
var prefix = 555;
var lineNumber = 1234;

var phoneNumber = String(areaCode) + String(prefix) + String(lineNumber);
console.log(phoneNumber);
alert(phoneNumber);
/*
 Christopher Watson
 7/11/15
 SDI Section 00
 Day 3 Expressions Homework
 */

//alert("Testing the js file");

//In order to tell the computer what to do you ask for input using
// prompt("");

//_______________________________________________________________________

//All prompt() returns text strings!!!
//THIS IS CALCULATIONS , PROMPTS , AND CASTING
var shoesCurrent = prompt ("How many shoes do you currently own?");
var spentOnShoesThisMonth = prompt ("How much do you spend on a pair of shoes?");
var spentOnShoesThisYear = prompt ("How much do you spend on shoes in a year");
var monthsInAYear = 12;
var averageSpentYearly = Number(spentOnShoesThisYear) / Number(monthsInAYear);
console.log(averageSpentYearly);
alert("You spend a average of $" + averageSpentYearly + " on pair of shoes");

//Add This.. Make sure you use an alert
//Cast Numbers as Strings
//String()
var areaCode = 229;
var prefix = 254;
var lineNumber = 1326;

var phoneNumber = String(areaCode) + String(prefix) + String(lineNumber);
console.log(phoneNumber);
//alert("For more information on sneakers contact " + phoneNumber);

var jumpShots = [500, 650, 545, 703, 342];

//How many jump shots did I make this week in my new shoes?
var totalJumpShots = jumpShots[0] + jumpShots[1] + jumpShots[2] + jumpShots[3] + jumpShots[4];
console.log("I shot jumpers in a pair of my new shoes. I made " + totalJumpShots + " jump shots in a week.");

//Average number of jump shots made
var averageJumpShots = totalJumpShots / jumpShots.length;
//Instead of 5 put = total / jumpShots.length;

//length property of arrays
console.log(jumpShots.length);
console.log("The average number of jump shots I took is " + averageJumpShots);

//use multi line comment and tell what calculations you made



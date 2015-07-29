/*
 Christopher Watson
 7/11/15
 SDI Section 00
 Day 3 Expressions Homework
 */

//alert("Testing the js file");

//In order to tell the computer what to do you ask for input using
// prompt("");


//All prompt() returns text strings!!!
//THIS IS CALCULATIONS , PROMPTS , AND CASTING
var jordansOwned = prompt ("How many pairs of Jordans do you own?");
var jordansPurchasedMonthly = prompt ("How many Jordans do you buy a month?");
var costOfJordans = prompt ("How much do Jordans cost");
var monthsInAYear = 12;
var totalYearlyCost = Number(jordansPurchasedMonthly) * Number(costOfJordans) * Number(monthsInAYear);
console.log(totalYearlyCost);
alert("In a year you spend $" + totalYearlyCost + " on Jordan sneakers!");

//Add This.. Make sure you use an alert
//Cast Numbers as Strings
//String()
var areaCode = 229;
var prefix = 254;
var lineNumber = 1326;

var phoneNumber = String(areaCode) + String(prefix) + String(lineNumber);
console.log(phoneNumber);
alert("TO SEE MY JORDAN SNEAKER COLLECTION CALL " + phoneNumber);

var jumpShots = [500, 650, 545, 703, 342];

//How many jump shots did I make this week in my new shoes?
var totalJumpShots = jumpShots[0] + jumpShots[1] + jumpShots[2] + jumpShots[3] + jumpShots[4];
console.log("I shot jumpers in a pair of my new shoes. I made " + totalJumpShots + " jump shots in a week.");

//Average number of jump shots made
var averageJumpShots = totalJumpShots / jumpShots.length;
//Instead of 5 put = total / jumpShots.length;

//length property of arrays
console.log(jumpShots.length);
console.log("I took an average number of " + averageJumpShots + " shots!");

//use multi line comment and tell what calculations you made

/* I calculated the amount of Jordans I owned which was 43 pair
I purchase 2 pair of Jordans a month
I spend $196.54 on one pair
In a year I spend 4716.96 on Jordans
I used an alert and put my contact info for anyone interested in seeing my sneaker collection
I make 2740 jumps shots a week
 The average number of jumpshots I took was 548 shot*/

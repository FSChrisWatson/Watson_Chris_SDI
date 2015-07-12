/*
 Christopher Watson
 7/11/15
 SDI Section 00
 Day 3 Expressions Homework
 */

//alert("Testing the js file");

//In order to tell the computer what to do you ask for input using
// prompt("");
//prompt("Name your favorite Sports team.");

//_______________________________________________________________________

//*****************//All prompt() returns text strings!!!
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
alert("For more information on sneakers contact " + phoneNumber);

//__________________________________________________


var shoeBrand = ["Nike", "Jordan", "Addidas"];

//How many oranges did we pick
var totalOranges = orangeBins [0] + orangeBins [1] + orangeBins [2];
console.log(totalOranges + " Oranges were picked in three days.");

//Average number of oranges picked
var averageOranges = totalOranges / 3;
//Instead of 3 put = totalOranges / orangeBins.length;

//length property of arrays
console.log(orangeBins.length);
console.log("The average number of oranges picked is " + averageOranges);

//use multi line comment and tell what calculations you made

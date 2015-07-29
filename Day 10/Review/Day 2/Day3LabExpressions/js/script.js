/*
 Christopher Watson
 7/9/15
 SDI Section 00
 HOMEWORK
 */

alert("This is a test");
//console.log - allows programmers to see information
console.log ("This is the console.");

//calculate how much pizza each party goer will get at the party.

//Declare a variable
//Use the keyword of var


var slicesPerPizza = 9;
var numberOfPeople = 16;
var pizzaOrdered = 2;

//slices of pizza * pizza ordered / number of people
//Result variables: Number of slices per person
//Result Format: Each person ate x slices of pizza at the party.
var slicesPerPerson = slicesPerPizza * pizzaOrdered / numberOfPeople;
console.log("Each person ate " +  slicesPerPerson + " pizzas at the party.");

//Use Modulo to find the remainder of pizza sparky gets and log into console.
//Sparky gets remainder of slices
// Modulo - %
// Gives remainder
var sparkysSlices = 18 % numberOfPeople;
console.log("Sparky got " + sparkysSlices + " slices of pizza ");

//Add week 1 - 5 to get the total
//Divide by 5 to get the average spending
var week1 = 20;
var week2 = 25;
var week3 = 20;
var week4 = 30;
var week5 = 30;

var totalSpent = week1 + week2 + week3 + week4 + week5;
console.log(totalSpent);
var averageWeeklySpending = totalSpent / 5;
console.log(averageWeeklySpending);

//Result format: Your X was originally $X discount, it is now $X without tax, and $X with tax.
console.log("You have spent a total of " + totalSpent + " on groceries over 5 weeks. That is an average of " + averageWeeklySpending + " per week.");

//TO find the discount subtract the original price from the discount.
//Multiply the discounted price with the .07 percent tax and that will give you the price with taxes

var originalPrice = 4.56;
var discount = 25;
var discDecimal = discount / 100;
var tax = .07;

var priceWithTax = originalPrice - discount * tax;
var priceNoTax = originalPrice - (originalPrice * discDecimal);

console.log(priceWithTax);
console.log(priceNoTax);

//Result Format: Your x was originally $X, but after a x% discount, it is now $X without tax, and $x with tax
console.log("Your DialSoap was originally $" + originalPrice + ", but after a " + discount + "% discount it is now $" + priceNoTax + " , without tax and $" + priceWithTax + " with tax.");

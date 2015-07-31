
 /*
Christopher Watson 
Section 00
7-16-15
Day 5 Conditionals Assignment
 */

//alert("Testing to see if this works!");

 //If I have the wedding
 //Then  “ Financially I will be broke && It’s until death do us part”
 //Console.log(“”);
 //Else if “If I say No she might kill me”

//--------------------------------

//prompt the user for ring price
 var ringPrice = prompt("What is the cost for your spouses Engagement ring?");
 while(isNaN(ringPrice) || ringPrice===""){
     ringPrice=prompt("Please only type numbers.\nWhat is the cost of the ring?")
 };

//prompt the user for ceremony price
 var ceremony = prompt("How much is your Wedding Ceremony going to cost?");
 while(isNaN(ceremony) || ceremony===""){
     ceremony=prompt("Please only type numbers.\nHow much is the wedding ceremony?")
 };

 var totalNeededForWedding = Number(ringPrice) + Number(ceremony);
 console.log("The total cost of your wedding is $" + totalNeededForWedding);

 //prompt the user for monthly income
 var monthlyIncome = prompt("Please enter your total monthly income.");
 while(isNaN(monthlyIncome) || monthlyIncome===""){
     monthlyIncome=prompt("Please only type numbers.\nPlease enter the monthly income?")
 };
 console.log("It will take you " + totalNeededForWedding / monthlyIncome + " months to save enough for Marriage! Good Luck!!");


 //Lets see if we have enough for the bachelor party
 var bachelorPartyCost = prompt("We want to throw a bachelor party. Please enter a number on how much it is suppose to cost?");
 while(isNaN(bachelorPartyCost) || bachelorPartyCost===""){
     bachelorPartyCost=prompt("Please only type numbers.\nHow much is your paycheck?")
 };

var loan = prompt("How much money will Your bank Loan you?");
 while(isNaN(loan) || loan===""){
     //reprompt using the same variable
     loan=prompt("Please only use numbers and don't leave blank. \nPlease type in a number.")
 }
 friendsChipIn = prompt("How much money can your friends chip in?");

 if(loan + friendsChipIn >= bachelorPartyCost){
     console.log("You can now throw a Bachelor Party! Time to turn up!")
 } else {
     console.log("No Bachelor Party for you. You don't have enough money");

 }

var question = "Yes";

 var toTurnedUp = prompt("Did you drink alcohol at the Bachelors Party? Please choose Yes or No");
toManyDrinks = prompt("I think you drank to much alcohol. \n How many Drinks did you have?");

 if(toTurnedUp === question && toManyDrinks >=5) {
     console.log("That's it you have had enough. Don't ruin your marriage before it starts!");
 } else if (toTurnedUp === question && toManyDrinks <=4){
     console.log("Don't drink too much you have a wedding tomorrow.");
 } else {
     console.log("Last night as a free man. Live a little but just be careful.");
 }

//Decide if you drive or take a cab/uber home
var breathalizer =  prompt("Lets take a breathalizer test. What is your count?");
 while(isNaN(breathalizer) || breathalizer===""){
     breathalizer=prompt("Please only type numbers.\nWhat is your count?")
 };
 var rideHome;

 rideHome = (breathalizer<.5) ? " drive Yourself home.": " call Uber.";
 console.log("You should" + rideHome);

/*
For my Marriage calculation I types in 1500 for engagement ring price and
5000 for ceremonyCost and 900 for monthly income. It estimated that I needed 7.2
months to save up enough money for marriage.

My bank loan was 3000 and my friends chipped in 1000 so therefore I was able to throw a bachelor party
I did drink alcohol
I only had 4 beers so the console read - Don't drink to much you have a wedding tomorrow.
My alcohol count was .7 so I had to call uber to take me home.
 */


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

 var ringCost = 5500;

 var ceremonyCost = 12000;

 var honeyMoonCost = 3500;

 var monthlySalary = 1500;

 //Find out how long it will take to save up for Marriage

 var totalWeddingCost = ringCost + ceremonyCost + honeyMoonCost;
console.log(totalWeddingCost);

 var monthsNeededToSave = totalWeddingCost / monthlySalary;
 console.log("It will take " + monthsNeededToSave + " months to save for my Marriage.");


//--------------------------------
//prompt the user for ring price


var ringPrice = prompt("What is the budget for your spouses Engagement ring?");
 console.log(ringPrice);

 //prompt the user for ceremony price
 var ceremony = prompt("How much is your Wedding Ceremony going to cost?");
 console.log(ceremony);

 var totalNeededForWedding = Number(ringPrice) + Number(ceremony);
 alert("The total cost of your wedding is $" + totalNeededForWedding);
 console.log("The total cost of your wedding is $" + totalNeededForWedding);

 //prompt the user for monthly income
 var monthlyIncome = prompt("Please enter your total monthly income.");
 console.log(monthlyIncome);
alert("It will take you " + totalNeededForWedding / monthlyIncome + " months to save enough for Marriage! Good Luck!!")







 //If I have the wedding
 //Then  “ Financially I will be broke && It’s until death do us part”
 //Console.log(“”);
 //Else if “If I say No she might kill me”
 //Console.log(“”);
 //Else “Don’t show up and be single for the rest of my life”

/*
For my Marriage calculation I types in 1500 for ringPrice
5000 for ceremonyCost and 1200 for monthly income. It estimated that I needed 14
months to save up enough money for marriage.
 */

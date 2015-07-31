
 /*
Christopher Watson 
Section 00
7/14/15
Conditionals
 */

//alert("Testing to see if this works!");

 //Basic Conditional if statement
 //if(condition to test){ code to run if true. }

 //create a boolean
 var oldEnough = false;

 //if the child is old enough tell him he can ride the coaster
if(oldEnough){
    //code inside of the {} will run if oldEnough is a boolean of true
    console.log("You can ride the coaster!!");
} else {
    //THis code will run if the if oldEnough evaluates to a boolean of false
    console.log("Sorry you are to young to ride");
}

 //Relational Expressions - Operators
 //Test the kids height to see if he can ride the ride

 var kidHeight = prompt("Lets find out your height. How tall are you in inches?");
 while(isNaN(kidHeight) || kidHeight===""){
     kidHeight=prompt("Please only type numbers.\nHow tall are you in inches?")
 };
 var sneakerLift = 2;

 //if the child is 48 or taller they can ride the ride
 if(kidHeight >=48){
     //code inside of here will run if child is 48 or taller
     console.log("Congrats you are tall enough to ride the coaster");

 } else if (kidHeight + sneakerLift >=48){
     //This code will run if the child is tall enough while wearing sneakers
     console.log("You are tall enough to ride the coaster, if you wear sneakers!");

 } else {
     console.log("Sorry you are too short to ride the roller coaster!");

 }


///NEED FOR LAST QUESTION!!!!!!
// /Check the price of an item. Scooter
 var scooterCost = prompt("Lets find out the price of a scooter. How much does a scooter cost?");
 while(isNaN(scooterCost) || scooterCost===""){
     scooterCost=prompt("Please only type numbers.\nHow much does a scooter cost?")
 };

 var budget = prompt("Lets find out your budget. What is your budget for the scooter?");
 while(isNaN(budget) || budget===""){
     budget=prompt("Please only type numbers.\nWhat is your budget?")
 };
 var payCheck = prompt("Lets find how much you make. How much is your paycheck?");
 while(isNaN(payCheck) || payCheck===""){
     payCheck=prompt("Please only type numbers.\nHow much is your paycheck?")
 };

 //if the price of the scooter is less than our buget than we can buy it.
 //And if our paycheck is over 400;

 if(scooterCost < budget && payCheck>400){
     console.log("Both the scooter is in budget and our paycheck is high enough");

 } else {
     console.log("Sorry you can buy the scooter!");

 }


 //If your GPA is greater than 2.0 than you can graduate!

 //(Condition to test) ? True Code: false code;

 //Normal if else statement

 var GPA= 3.8;
 var gpa = prompt("Lets find how your GPA. What is your current GPA?");
 while(isNaN(gpa) || gpa===""){
     gpa=prompt("Please only type numbers.\nWhat is your GPA?")
 };


 if(GPA>2.0){

     console.log("Congrats you can graduate");

 } else{
     console.log("Sorry your GPA is to low");
 }

 //ternary way
 //(condition to test) ? true code : false code;
 (GPA>2.0) ?  console.log("Congrats you can graduate"):console.log("Sorry your GPA is to low");

 //Decide what book a kid will read
 var age = 6;
 var book;

 //If the child is under 10 -- they read green eggs and ham
 //Otherwise they can read the Time Machine

 book = (age<10) ? "Green Eggs & Ham": "The Time Machine";
 console.log("You should read" +book);

































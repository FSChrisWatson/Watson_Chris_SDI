
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

 var kidHeight = prompt("How tall are you in inches?");
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

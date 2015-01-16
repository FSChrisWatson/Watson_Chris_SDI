/**
 * Created by christopherwatson on 1/15/15.
 */
/*
 Chris Watson
 1/10/2015
 Day 5 Coding
 */

// Single lined comment

//This is an alert
//alert("Testing to see if this is connected");

// Basic Conditional Statement

//Create a boolean variable to test
var oldEnough = true;

//If the child is old enough then print to the console, You Can Ride!

/*
Basic structure of if statement

if(condition to test) {Code to run if the condition is true
} else{
Code to run if the condition is false
}
 */

if(oldEnough){
//Code inside of {} will run if the test is true
//This code will be skipped if test is false
console.log("You can ride the coaster!");
}

console.log("What came after the if then statement");

//Relationship Expressions

//If the kid is over 48" then he can run
var kidHeight= 47;

//Create variable for kid height
var minHeight= 48;

//Create a variable for a shoe lift
var shoeLift= 2;
//Is the child tall enough with shoe lift?

if(kidHeight + shoeLift > minHeight){
console.log("You are tall enough to ride!");
} else{
    //This code will run if the test is false!
    console.log("Sorry you are to short!");


}

//What ride can the kid go on based on his height?
//If the kid 48 + then Space Mountain
//If 40+ then Buzz Lightyear Ride
//Anything short - Winnie The Pooh

var childHeight = 42
if(childHeight>=48){

    console.log("You can ride space mountain");

} else if (childHeight>=40){

    console.log("You can ride Buzz Lightyear and Winnie The Pooh");

} else{

    console.log("You can only ride Winnie The Pooh");

}

/*
If, else if, else statement

if(condition1 to test){Code to run if condition1 is true.

} else if(condition2 to test){Condition2 will only be tested if Condition1 is false!

Code to run if condition2 is true

} else {code to run if condition1 and condition2 is false

 */

//&& T&&T=T T&&F=F F&&T=F F&&F=F
//II TIIT=T TIIF=F FIIT=F FIIF=F

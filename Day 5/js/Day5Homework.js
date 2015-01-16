/**
 * Created by christopherwatson on 1/15/15.
 */
/*
 Chris Watson
 1/15/2015
 Day 5 Homework
 */

//This is an alert
//alert("Testing to see if this is connected");

//Console.log - allows programmers to see information
console.log("This is the console.");


//If your cars has more than 200 gallons of gas left than you can make it without stopping!

var mpg = 50;
var carsGasTank = 250;
var gasLeft = 100;

if(carsGasTank>200){

    console.log("Yes, you can make it without stopping for gas");

} else{

    console.log("You only have gallons of gas in your tank, better get gas now while you can");

}

//If the username & password are not correct, then and error message will appear

var correctUsername = "Chris";
var correctPassword = "FullSail";
var username = prompt ("Chris");
var password = prompt ("FullSail");

if(username == "Chris" && password == "FullSail")
{
    console.log("Welcome Chris!");

}

//If the psi on the front is 10 and the rear is 20, then the car is up to spec.


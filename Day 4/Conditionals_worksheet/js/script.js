/*
 Christopher Watson
 Section 00
 7/14/15
 Conditional assignments
 */

alert("TESTING TESTING TESTING to see if this works!");

//If your cars has more than 200 gallons of gas left than you can make it without stopping!

var mpg = 50;
var carsGasTank = 250;
var gasLeft = 100;

if(carsGasTank>200){

    console.log("Yes, you can make it without stopping for gas");

} else{

    console.log("You only have gallons of gas in your tank, better get gas now while you can");

}


//If your GPA is greater than 2.0 than you can graduate!

//(Condition to test) ? True Code: false code;

//Normal if else statement

var GPA= 3.8;

if(GPA>2.0){

    console.log("Congrats you can graduate");

} else{
    console.log("Sorry your GPA is to low");
}

//ternary way
(GPA>2.0) ?  console.log("Congrats you can graduate"):console.log("Sorry your GPA is to low");


//_______________________________


var timeOFMovie = 10;
var ageOfCustomer = 55;
var ticketPrice = 12;
var discountPrice = 5;
var timeFrame2Hours = 5;
if(ageOfCustomer <= 55 && timeOFMovie >= 10) {
    console.log("The ticket price is $" + discountPrice + ".")

} else {
    console.log("Pay $" + ticketPrice + ".");
}

//---------------------------------
//if the price of the scooter is less than our buget than we can buy it.
//And if our paycheck is over 400;

if(scooterCost < budget && payCheck>400){
    console.log("Both the scooter is in budget and our paycheck is high enough");

} else {
    console.log("Sorry you can buy the scooter!");

}

/*
 Christopher Watson
 Section 00
 7/14/15
 Conditional assignments
 */

//alert("TESTING TESTING TESTING to see if this works!");

//If your cars has more than 200 gallons of gas left than you can make it without stopping!

var mpg = 50;
var carsGasTank = 250;
var gasLeft = 30;

if(carsGasTank>200){

    console.log("Yes, you can make it without stopping for gas");

} else{

    console.log("You only have gallons of gas in your tank, better get gas now while you can");

}


//_______________________________


//If the username & password are not correct, then and error message will appear

var correctUsername = "Chris";
var correctPassword = "FullSail";
var username = prompt ("Please Enter correct Username");
var password = prompt ("Please enter correct password");

if(username == correctUsername && password == correctPassword)
{
    console.log("Welcome " + username);}

else if (username != correctUsername){
    console.log("User not found. Try again")

} else { console.log("Password does not match our records")


}

//________________________________


var timeOFMovie = 9;
var ageOfCustomer = 50;
var ticketPrice = 12;
var discountPrice = 7;

if(ageOfCustomer <= 55 && timeOFMovie >= 10) {
    console.log("The ticket price is $" + discountPrice + ".")

} else {
    console.log("Pay $" + ticketPrice + ".");
} 







































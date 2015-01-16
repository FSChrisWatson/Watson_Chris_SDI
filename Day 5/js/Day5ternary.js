/**
 * Created by christopherwatson on 1/15/15.
 */


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

//Decide what book a kid will read
var age = 6;
var book;

//If the child is under 10 -- they read green eggs and ham
//Otherwise they can read the Time Machine

book = (age<10) ? "Green Eggs & Ham": "The Time Machine";
console.log("You should read" +book);

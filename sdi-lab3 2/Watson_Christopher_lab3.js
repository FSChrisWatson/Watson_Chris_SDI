/**
 * Christopher Watson
 * SDI 1505
 * Day 3
 * 5/9/15
 */

// alert("JavaScript works!");

var myName = "Chris Watson";
var oldEnough = true;
var ageRequirement = "22";
var securityCheck = "";

securityCheck = prompt("Please enter your full name.");

if(securityCheck === myName) {

   ageRequirement = prompt("How old are you?");

    if(ageRequirement === "22") {

        console.log("You can enter the strip club, " + myName + " ");

 } else {

        console.log("You are not old enough to dance with naked women!");

    }
} else {

    console.log("Leave before I call your Mom and the Cops!");

}


var moMoney = 3000000;
var moneyBanks = 45;
var average = 25;

moMoney = parseInt(prompt("Enter the number 45"));

if(moMoney + moneyBanks >= average){

    console.log("You're rich! Go to VIP on the second floor!")

} else {

    console.log("No booty shaking for you. You don't have enough money");

}

var bankAccount = 4500;

bankAccount = prompt("How much money do you have in your bank account?");

if(bankAccount >=1250) {

    console.log("Get a lap dance and buy some drinks");

} else if (bankAccount <= 100 * 12){

        console.log("Go Home or go to the Winnie Hut because you don't have enough money to have fun");

    } else {

    console.log("Just go to the Winnie Hut");
}

console.log("Enjoy the night!");






 /*
Christopher Watson 
Section 00
7/21/15
DAY 7 ZOMBIES
SDI
 */

//alert("Testing to see if this works!");

 //We have 1 zombie at Full Sail
 //It can bite 4 ppl a day and turn them into zombies buy the next day
 //The CBC wants to know how many zombies there will be in 8 days

 //Create the givens
 //How many Zombies do we have
 var numZombies = 2;

 //How many bites can a zombie make each day
 var numBites = 3;

 //What is our timeline
 var days = 45;

 /*for(var i=1; i<=days; i++){
     //How many ppl get infected everyday
     var infectedPeople = numZombies * numBites;

     //How many zombies will we have at the end of the day?
     numZombies+=infectedPeople;

     console.log("On day number " + i+ " there will be " + numZombies + " zombies!")
 }
     */
 //---------------------------------------


 //The CDC wants to know how many days it will take for there to be 1 million Zombies

 //variable to count the number of days
 var numDays = 23;

 while(numZombies<=1000000){

     //How many ppl get infected everyday
  var infectedPeople = numZombies * numBites;

  //How many zombies will we have at the end of the day?
  numZombies+=infectedPeople;

     console.log("On day number " + numDays+ " there will be " + numZombies + " zombies!")

     //Increment the day
     numDays++;

  }
 console.log("It will take " + (numDays-1) + " to make a million zombies!");
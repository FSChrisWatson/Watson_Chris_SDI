
 /*
Christopher Watson 
Section 00
7/25/15
Random Number Generator
 */

//alert("Testing to see if this works!");

 //Create a function that will take in a user prompted
 //...max and min and return a random number between them.

 //Create a variable for the min value
 var min = prompt("We are going to find a random number between 2 values.\nWhat is the min value?");
 //validate that prompt
 while(isNaN(min) || min===""){
     if(isNaN(min)){
         min=prompt("Please only type numbers.\nWhat is the minimum value?");
     }else{
         min=prompt("Please do not leave blank.\nWhat is the minimum value?");
     }
 }

 //Number cast or parse int
 min=Number(min);

 //Variable for max
 var max = prompt(("What is the max value?"));
 //validate the prompt
 while((isNaN(max) || max==="") || max<=min){
     if(isNaN(max)){
         max=prompt("Please only type numbers.\nWhat is the maximum value?");
     }else if (max<=min && max!=""){
         max=prompt("Please make sure the max value is greater than the min value of "+min+"\nWhat is the max value?");
     }

     else{
         max=prompt("Please do not leave blank.\nWhat is the maximum value?");
     }
 }

 //number cast max
 max=Number(max);

 //test to check value of max and min
 console.log("The min value is "+min+".\nThe max value is " +max+".");

 //Get 15 numbers to print to the console.log
 for(var i= 0; i<15;i++){

     var tempNum=randomizer(min, max);
     console.log(tempNum);
 }

 //Function call the randomizer function
 var results1 = randomizer(min, max);
console.log("Your random number is "+results1);
 //create the random function
 function randomizer(mn, mx){
     //Generate our random number
     var randomNum=Math.round(Math.random()*(mx-mn)+mn);
     console.log(randomNum);
     //return the random number into our main code
     return randomNum;
 }





































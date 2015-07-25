
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

 /*
Christopher Watson 
Section 00
Date
Class
 */

//alert("Testing to see if this works!");

 //Create a function to calculate the number of total shots total Kobe Bryant takes.
 function kobeShots (f,m,t){
   var totalShots = f+m+t;
     return totalShots;
 };

 //Ask the user will they like to calculate the number of shots Kobe took
 var freeThrows=parseInt(prompt("How many free throws did Kobe take this season?\n Please enter a number"));
 //validate
 while(isNaN(freeThrows) || freeThrows===""){
     freeThrows=prompt("Please only type numbers.\nHow many free throws did Kobe take this season?")
 };

 var midRange=parseInt(prompt("How many mid-range shots did Kobe take this season?\n Please enter a number"));
 while(isNaN(midRange) || midRange===""){
     midRange=prompt("Please only type numbers.\nHow many mid-range shots did Kobe take this season?")
 };

 var threePointers=parseInt(prompt("How many three pointers did Kobe take this season?\n Please enter a number"));
 while(isNaN(threePointers) || threePointers===""){
     threePointers=prompt("Please only type numbers.\nHow many three pointers did Kobe take this season?")
 };

//Function call for Anonymous Functions MUST BE AFTER THE DEFINITION!!
//Function call to total shots
 var resultsTotal = kobeShots(freeThrows,midRange,threePointers);
 console.log("Kobe took a total of "+resultsTotal+" shots all together!");
 alert("Kobe took a total of "+resultsTotal+" shots all together!");
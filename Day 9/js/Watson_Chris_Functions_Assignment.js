
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
 var userPrompt=prompt("Would you like to calculate the shots Kobe took?\n Please answer yes or no");
 //validate
 while(userPrompt.toLowerCase()!="yes" && userPrompt.toLowerCase()!="no"){
     userPrompt=prompt("Please only answer yes or no.\nWould you like to calculate the number of shots Kobe took?");
 }

 //Function call for Anonymous Functions MUST BE AFTER THE DEFINITION!!
 //Function call to total shots
 var resultsTotal = kobeShots(freeThrows,midRange,threes);
 console.log(resultsTotal);

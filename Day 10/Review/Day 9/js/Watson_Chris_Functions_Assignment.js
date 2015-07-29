
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

 /*
 I typed in 756 free throws, 385 mid range, and 146 three pointers and my calculator gave me 1287 total shots made.
  */

 //___________________________________________________________________________________________

 var mass =parseInt(prompt("Lets find the density of a material.\nPlease enter a mass."));
 while((isNaN(mass) || mass==="") || mass<=volume){
     if(isNaN(mass)){
         mass=prompt("Please only type numbers.\nPlease enter a mass");
     }else if (mass<=volume && mass!=""){
         mass=prompt("Please make sure the mass is a greater value than"+volume+"\nWhat is the value?")
     }else {
         mass = prompt("Please do not leave blank.\nWhat is the mass value?");
     }
 };
 var volume =parseInt(prompt("Please enter a volume."));
 while(isNaN(volume) || volume===""){
     volume=prompt("Please only type numbers.\nPlease enter a volume.")
 };

 function calcDensity(m,v){
     var density = m/v;
     console.log("The mass of a material is "+m+" and the volume of a material is "+v+".The total density of a material is "+density+".");
 }
 calcDensity(mass,volume);
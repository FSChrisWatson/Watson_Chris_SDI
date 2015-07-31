
 /*
Christopher Watson 
Section 00
Date
Class
 */

//alert("Testing to see if this works!");
//Basic for loop
 //for(initialized counter; condition; increment of change)
 var payCheck = prompt("Lets find how much you make. How much is your paycheck?");
 while(isNaN(payCheck) || payCheck===""){
     payCheck=prompt("Please only type numbers.\nHow much is your paycheck?")
 };


 for(var i =10; i>-0; i--){
     console.log("The value of i is " + i);


 }

 //Breaks - if this command is run, your loop will stop
 for(var j=0; j<5; j++){
     console.log("The value of j is " + j);
     //If the value of j is 3 stop my loop
     if(j===3){
         break;
     }
 }
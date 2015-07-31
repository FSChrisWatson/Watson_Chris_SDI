
 /*
Christopher Watson 
Section 00
Date
Class
 */

alert("Testing to see if this works!");

 //Lets calculate the circumference of a circle.
 var radius = parseInt(prompt("Lets calculate the circumference of a circle.\nPlease choose a number for the radius."));
 //validate
 while(isNaN(radius) || radius===""){
     radius=prompt("Please only enter a number. Do not leave it blank.\nChoose a number for the radius.")
 }

 /*
Christopher Watson 
Section 00
7/23/15
Day 8 Functions
 */

 calcArea();

//alert("Testing to see if this works!");

 //Basic function structure = functionName(){//Code to Run goes Here}
printHello();
 //Create a function that will console log something
 function printHello(){

     //This code will run when the function runs
     console.log("This function is working");
 }

 //Create a function call in order for the code above to run
 //Kinda like the go button to the factory
 printHello();
 printMore();
 printHello();

 //Create a function that console logs a different string
 function printMore(){
     console.log("This is different text.");
 }
 //In order for the function to run in the console call for it
 printMore();


 //Lets create a function that calculates the area of a rectangle
 function calcArea(){
     //Create variables for with height and area
     var width = 20;
     var height = 30;
     var area = width * height;
     console.log("The area of a rectangle is " + area);
 }
 calcArea();
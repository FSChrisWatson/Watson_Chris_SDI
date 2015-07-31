
 /*
Christopher Watson 
Section 00
7/23/15
Function Scope
 */

//alert("Testing to see if this works!");

 //variable Scope - variables that are inside and outside of a function


 //Create a variable called width in our Main Code
 //This variable is scoped outside of the function, which means scoped to the main code
 var width = prompt("Please enter a width.");
 while(isNaN(width) || width===""){
     width=prompt("Please only type numbers.\nPlease enter a width?")
 };
 //console log it
 console.log("Starting width is "+width );

 //Create a variable called change me
 //THis will be scoped to the main code
 var changeMe = 7;
 var changeMe = prompt("Enter a number.");
 while(isNaN(changeMe) || changeMe===""){
     changeMe=prompt("Please only type numbers.\nEnter a number?")
 };
 console.log("Starting the value of changeMe is "+changeMe);

 //Create a function that calculates the perimeter of a rectangle
 function calPeri(){

     //Create variables for width, height, and perimeter
     //Try not to reuse variable names
     //But this is going to be impossible for larger files

     //This variable is scoped to the function calPeri
     var width = 10;
     console.log("Width inside a function "+width);
     var height = 20;
     var perimeter = width *2 + height *2;

     //Change the value of changeMe
     changeMe=15;
     console.log("Inside of the function changeMe is "+changeMe);

     console.log("The perimeter is " + perimeter);
 }
 console.log("Before the function call width is "+width);
 console.log("Before the function call changeMe is "+changeMe);
 //Function call to run code
 calPeri();

 console.log("After the function call changeMe is "+changeMe);


 //THIS WILL NOT WORK MAIN CODE CAN NOT SEE INSIDE A FUNCTION
 //console.log("The value of Height "+height);





































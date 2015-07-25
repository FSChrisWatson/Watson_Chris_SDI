
 /*
Christopher Watson 
Section 00
7/25/15
Anonymous Functions
 */

//alert("Testing to see if this works!");

 //Basic Anonymous Function
 //!! var functionName = function();
//Extremely popular in Java and Jquery
 //Also important in object oriented programming
 //For now, it is a matter of style choice between anon and regular functions.

 //Create an anon function to calculate the area of a triangle
 var triArea = function(b,h){
     var area = .5*b*h;
     return area;
 };

 //Function call for  anon function
 //MUST BE AFTER THE DEFINITION
 var results = triArea(10,20);
 console.log(results);


 /*
Christopher Watson 
Section 00
7/25/15
Multiple
 */

//alert("Testing to see if this works!");

 //Create variables for height and width
 var height = 8;
 var width = 6;

//Create another variable for a base of a triangle
 var base = 5;

 //Create a function to calculate the perimeter of a rectangle
 var calcPeri = function(h,w){
     var periTotal = 2*h + 2*w;
     return periTotal;
 };
 //Function call must go under function definition for anonymous functions
 var resultsPeri = calcPeri(height, width);
 console.log(resultsPeri);



 //___________________

  //Create a function to calculate the area of the rectangle
 function calcArea(h,w){
     var area = w*h;
     return area;
 };

 //Function call to area
 var resultsArea = calcArea(height, width);
 console.log(resultsArea);

 //Create a function to calculate the area of a triangle
 //anon function
 var triArea = function(b,h){
     var area = .5*b*h;
     return area;

 };
 //Function call to triangle area
 var triAreaTotal = triArea(base, height);
 console.log(triAreaTotal);




 //////Create a procedure that will console.log the rectangle perimeter and area
 function printOut(p,a){
     console.log("The perimeter is "+p);
     console.log("The area is "+a);

 };
 //Function call for our print outs
 printOut(resultsPeri, resultsArea);

















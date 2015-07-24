
 /*
Christopher Watson 
Section 00
7/23/15
Returns
 */

//alert("Testing to see if this works!");

//Create a function area of rectangle
 function calArea(w,h){
     //Calculate the area
     var area=w*h;
     //console.log the results
     console.log("The area is "+area+".");

     //In order to use results in main code use
     // return "then whatever you want to return"
     return area;
 }
 //Call the function
 //Catch the returned value in a variable
 var results =calArea(10,30);

 //Access the area in main code
 console.log(results);

 //calculate w 40 h 60
 var results2 = calArea(40,60);
 console.log(results2);

 //What is the total area of both rectangles
 var total = results+results2;
 console.log("The combined area of both is "+total+".");
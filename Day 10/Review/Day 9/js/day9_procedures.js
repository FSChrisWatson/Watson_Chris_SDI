
 /*
Christopher Watson 
Section 00
7/25/15
Procedures
 */

//alert("Testing to see if this works!");

 //This is a normal function

 function calcArea(w, h){
     var area = w*h;
     return area;
     //Returns a variable
 }

 ///function call to calcArea
 calcArea(10,20);
 //catch the return value
 console.log(results1);

 //This is a Procedure
 //A list of steps to do
 //RETURNS NOTHING
 function calcPeri(w,h){
     var peri = 2*w + 2*h;
     console.log(peri);
 }
 //Function call for the procedure in order for it to run
 //Does not catch anything!
calcPeri(10,20);
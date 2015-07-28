
 /*
Christopher Watson 
Section 00
07/28/15
Review
 */

//alert("Testing to see if this works!");

 //Figure out how much pizza costs per sq in
 //How much pizza per slice

 //prompt the user for:
 //Radius of pizza
 //Cost of Pizza
 //Number of slices

 var pizzaRadius = prompt("We are calculating the cost of pizza.\nWhat is the radius of your pizza?");
 while(isNaN(pizzaRadius)|| pizzaRadius===""){
     //Re-prompt
     pizzaRadius=prompt("Please do not leave blank and only use numbers.\nPlease enter your pizza radius.");
 }
 //Cast to numbers
 pizzaRadius =Number(pizzaRadius);

 var pizzaCost =prompt("How much does your pizza cost in total?");
 //validate
 while(isNaN(pizzaCost)|| pizzaCost==="") {
     pizzaCost = prompt("Please do not leave blank and only use numbers.\nPlease enter your pizza cost.");
 }
 //Cast to numbers
 pizzaCost =Number(pizzaCost);

 var pizzaSlices=prompt("How many slices are in your pizza?");
 while(isNaN(pizzaSlices)|| pizzaSlices==="") {
     pizzaSlices = prompt("Please do not leave blank and only use numbers.\nPlease enter your pizza slices.");
 }
 //Cast to numbers
 pizzaSlices =Number(pizzaSlices);


//Create a Function that launches all of the other functions
 function masterPizzaFunc(rad,cost,slices){
     var area = pizzaArea(rad);

     //Function call the sq in function
     var squareInCost = pizzaSqInCost(cost,area);

     //Function call to slices function
     var slicesPrice = pricePerSlice(slices,cost);

     return [squareInCost,slicesPrice];

 }

 //function call to the master function
 var results = masterPizzaFunc(pizzaRadius,pizzaCost,pizzaSlices);

//NEW AFTER we wrote everything he went back up to do this
 //Function Call for area function
 var area = pizzaArea(pizzaRadius);

 //Function call the sq in function
 var squareInCost = pizzaSqInCost(pizzaCost,area);

 //Function call to slices function
 var slicesPrice = pricePerSlice(pizzaSlices,pizzaCost);

 //print out results
 console.log("Your pizza cost $"+results[0]+" per sq inch of pizza or $"+results[1]+" per slice.");

 //Create a function to calc the area of pizza
 function pizzaArea(r){
     //Area of circle r*r*PI
     var area=Math.pow(r,2)*Math.PI;
     return area;
 }

 //--------------------------------------------------------------

 //Create a function that calculates a price per sq in
 function pizzaSqInCost(price, area){
     //cost per sq in =price/area
     var costPerIn=price/area;
     //Since this is cost - aka dollar and cents
     //Round to 2 decimal places
     costPerIn=costPerIn.toFixed(2);

     return costPerIn;
 }

 //----------------------------------------------------------------

 //create a function that calculates the cost per slice
 function pricePerSlice(slices,price){
     //cost per slice=pizza price/number of slices
     var costPerSlice = price/slices;

     //Dollars and cents so round to 2 decimals
     costPerSlice=costPerSlice.toFixed(2);

     return costPerSlice;
 }
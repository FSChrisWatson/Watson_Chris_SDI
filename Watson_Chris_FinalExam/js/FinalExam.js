
 /*
Christopher Watson 
Section 00
7/30/15
Final Exam
 */

//alert("Testing to see if this works!");

 var xboxCost = prompt("We are calculating the cost of Xbox One.\nHow much does an Xbox One cost?");
 while(isNaN(xboxCost)|| xboxCost===""){
     //Re-prompt
     xboxCost=prompt("Please do not leave blank and only use numbers.\nPlease enter the cost of an Xbox One.");
 }

 var priceDiscount =prompt("Today you get a discount on the item.\nWhat percent do you think you discount should be?");
 while(isNaN(priceDiscount)|| priceDiscount===""){
     //Re-prompt
     priceDiscount=prompt("Please do not leave blank and only use numbers.\nPlease enter a number.");
 }

 function futureItem(game,price){
     var disPrice = xboxCost-(priceDiscount/100);
     var totalPrice = xboxCost - disPrice;
     return disPrice;
 }
 console.log("The final cost of an item that costs $"+xboxCost+".\n with a discount of $"+priceDiscount+" is $"+ +".");

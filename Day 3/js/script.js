/*
Christopher Watson
 Section 00
 7/11/15
Arrays
 */

//alert("Hope this shit works?");

//Create a basic array
//Picking Oranges

var orangeBins = [30, 500, 10002];

//How many oranges did we pick
var totalOranges = orangeBins [0] + orangeBins [1] + orangeBins [2];
console.log(totalOranges + " Oranges were picked in three days.");

//Average number of oranges picked
var averageOranges = totalOranges / 3;
 //Instead of 3 put = totalOranges / orangeBins.length;

//length property of arrays
console.log(orangeBins.length);
console.log("The average number of oranges picked is " + averageOranges);

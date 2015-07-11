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

//-------------------------

//Create an Array of Avengers
var avengerNames = ["Iron Man", "Captain America", "Hawk Eye", "Hulk"];

//To Print out whole Array
console.log(avengerNames);

//To print out a specific item in the array
console.log(avengerNames [1]);
//This prints out the name Captain America


//use a variable as an index number
var num = 2;
console.log(avengerNames[num]);


//Set a specific item
avengerNames [3] = "Thor";
console.log(avengerNames);
//Swapped out Hulk for Thor

//Lets add a new item in the array
avengerNames [4] = "Falcon";
console.log(avengerNames);
//Added falcon to list

//Create a new array for fruits
var fruitArray = ["Banana", "Pear", "Peach", "Strawberry"];
console.log(fruitArray);

//Push - method of a function of arrays or adding item to the array
//Adds it to the end of the array
fruitArray.push("Pineapple");
console.log(fruitArray);
console.log(fruitArray [4]);

fruitArray.push("date");
console.log(fruitArray);

//Pop method - Removes the last item in the array AND returns it
var caught = fruitArray.pop();
console.log(fruitArray);
console.log(caught);

////Splice - Adding and removing items in an Array
////Splice(Position, # of items to remove, items to put in)
fruitArray.splice(1, 1, "Lemon");
console.log(fruitArray);

































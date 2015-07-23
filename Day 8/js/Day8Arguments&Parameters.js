
 /*
Christopher Watson 
Section 00
Date
Class
 */

//alert("Testing to see if this works!");

 //Arguments go in the function call and these are specific values
 //Parameters go in the definition and these catch the arguments - "Generic Containers"

 //Create variables for width and height
 var width = 10;
 var height = 20;

 //W and H below signifies parameters
 function calcArea(w,h){

     //Create variables
     //width = 10;
     //height = 20;

     //calculate the area
     var area = w*h;

     //console log the area
     console.log("The area of a rectangle with a width of "+w+" and a height of "+h+" is "+area+".");
 }
 //Now call the function for it to run in the console
 //Width and height signifies arguments and arguments go in the function call
 calcArea(width,height);

 //Find the area with a width = 6 height = 7
 calcArea(6,7);

 //Now ask the user
 var userWidth=prompt("Lets calculate the area of a rectangle.\nPlease enter a width.");

 //validate & number cast the input
 var userHeight=prompt("Please enter a height.");

 //How would I get a area
 calcArea(userWidth,userHeight);


 //Create a function that will calculate dog years

 function dogYears(humanAge){
     //Input a human year and spit out a dog year
     //humanAge*7 = dog age
     var dogAge=humanAge*7;

     //Print out results
     console.log("A dog who is "+humanAge+" is "+dogAge+" in dog years.");

 }
 //Calculate how old a 4 year old dog is in dog years
dogYears(4);

 //calculate a 7 year dog
 dogYears(7);

 //Prompt the user for there dogs age
 var yourDogAge=prompt("Lets figure out how old your dog is in dog years.\nPlease enter your dogs human age.");
 //validate and cast if needed

 dogYears(yourDogAge);








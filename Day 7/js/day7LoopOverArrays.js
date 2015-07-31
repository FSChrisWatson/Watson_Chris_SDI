
 /*
Christopher Watson 
Section 00
7/21/15
Class
 */

//alert("Testing to see if this works!");

 //Create an Array of Scooby Doo Characters
 var scoobyGang = ["Scooby", "Shaggy", "Velma", "Daphne", "Fred1"];

 //Push an array... Adds another person to the array
 scoobyGang.push("Fred");
 scoobyGang.push("Scrappy");
 //Cycle through this array and tell each one of them that they solved the case.
 console.log(scoobyGang.length);

 for(var i=0; i<scoobyGang.length; i++){
     console.log("You solved the case " + scoobyGang[i]);
     //Call out scooby and shaggy to get scooby snack
     if(scoobyGang[i]==="Scooby" || scoobyGang[i]==="Shaggy") {
         console.log("Good Job " + scoobyGang[i] + ". You get a scooby snack!");
     } else{
         console.log("You really solved the case " + scoobyGang[i]+ "Congratulations!");
     }
 }

 //Create an array of films
 var bills=[50,10,5,20,10];


 //Create a variable and define it for total
 var total=0;

 //Create a loop to add up all of our bills from dinner
 for(var j=0; j<bills.length; j++){

     //Test to get each  item in bills
     //console.log(bills[j]);

     if(bills[j]>=15){
         //add up the values of bills
         total += bills[j];

     }

     //Add up the value of bills
     total += bills[j];
 }
 console.log("The total of your bills is $" + total);

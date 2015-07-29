
 /*
Christopher Watson 
Section 00
7/21/15
ArrayLoop Worksheet
 */

//alert("Testing to see if this works!");

//Create a loop that will tell how many interceptions Tony Romo Threw.
var numOfInterceptionsRegularSeason = parseInt(prompt("How many interceptions did Tony Romo throw in the regular season?"));
 while(isNaN(numOfInterceptionsRegularSeason) || numOfInterceptionsRegularSeason===""){
     numOfInterceptionsRegularSeason=prompt("Please only type in numbers.\nHow many interceptions did Romo throw in the regular season?");
 }

 var numOFInterceptionsPlayoffs = parseInt(prompt("How many interceptions did Tony Romo throw during the playoffs?"));
while(isNaN(numOFInterceptionsPlayoffs) || numOFInterceptionsPlayoffs===""){
    numOFInterceptionsPlayoffs=prompt("please only type in numbers.\nHow many interceptions did Romo throw in the playoffs?")
}

var numOfInterceptionsInChampionship = parseInt(prompt("How many interceptions did Tony Romo throw during the Championship?"));
 while(isNaN(numOfInterceptionsInChampionship) || numOfInterceptionsInChampionship===""){
     numOfInterceptionsInChampionship=prompt("Please only type in numbers.\nHow many interceptions did Romo throw in the Championship?")
 }


var interceptions=[numOfInterceptionsRegularSeason,numOFInterceptionsPlayoffs,numOfInterceptionsInChampionship];

 //Create a variable and define it for total
 var total=0;

 //create a loop to add up all of the interceptions thrown.
 for(var i=0; i<interceptions.length; i++){

     //Test to get interceptions in totalInterceptions
     //console.log(interceptions[i]);
     if(interceptions[i]>5){
         //add up the number of interceptions
         total += interceptions[i];
     }

     //Add up the total of interceptions
     total+= interceptions[i];
 }
 console.log("The total number of interceptions is "+total);
 alert("The total number of interceptions is "+ total);
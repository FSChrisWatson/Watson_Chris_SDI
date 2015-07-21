
 /*
Christopher Watson 
Section 00
7/21/15
Day 7 Beer
 */

//alert("Testing to see if this works!");

 //Create a loop that will write out the lyrics for the 99 bottles of beer song

 //for(initialization; condition; increment of change){}
 for(var i=99; i>0; i--){
     //verify that the loop works
     //console.log(i);
     if(i===2) {
         console.log(i + " bottles of beer on the wall. " + i + " bottles of beer. " +
         " You take one down and pass it around." + (i - 1) + " bottles of beer on the wall");
     }else if(i===1)
         console.log(i + " bottles of beer on the wall. " + i + " bottles of beer. " +
         " You take one down and pass it around.No more bottles of beer on the wall./n The End");){

     }else {
         console.log(i + " bottles of beer on the wall. " + i + " bottles of beer. " +
     " You take one down and pass it around." + (i - 1) + " bottles of beer on the wall");

     }
 }
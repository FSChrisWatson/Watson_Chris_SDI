
 /*
Christopher Watson 
Section 00
7-18-15
Math
 */

//alert("Testing to see if this works!");


//round() - normal rounding  .5 + goes up .49999 - goes down
 //Does permanatly change the variable value
 //To change the variable assign it back to the variable name
 var num1 = 9.744;
 //To change the variable assign it back to the variable name
 num1 = Math.round(num1);
 console.log(num1);
console.log(Math.round(num1));
 console.log(num1);

 //FLoor() Rounds down to the nearest interger
 var num2 = 6.1;
 console.log(num2);
 console.log(Math.floor(num2));

 //ceil() Rounds up to the nearest interger
 var num3 = 4.8;
 console.log(num3);
 console.log(Math.ceil(num3));

 //Random() Returns a number between 0 and almost 1
 var num4 = Math.random();
 console.log(num4);

 //Number between 0 - 10
 var num5 = Math.random() * 10;
 console.log(num5);

 //Random number between 2 other numbers NOT zero
 //Math.random() * (max - min) + min

 //Number between 50 - 80
 var num6 = Math.random() * (80 - 50) + (50);
console.log(num6);

 //An INTEGER between 100 - 1000
 var num7 = Math.round(Math.random() * (1000 - 100) + 100);
 console.log(num7);

 //.toFix(x) - Rounds to a decimal place - x decimal
 var num8 = 12.123456;
 console.log(num8);
 console.log(num8.toFixed(2));

//MAth constants
 //PI - 3.14259
 //Math.PI
 console.log(Math.PI.toFixed(5));

 //Circumference of a circle
 //2 * r * pi
 var radius = 7;
 var circumference = 2 * radius * Math.PI;
 console.log(circumference);



























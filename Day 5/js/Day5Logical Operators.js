/**
 * Created by christopherwatson on 1/15/15.
 */
// Single lined comment

//This is an alert
//alert("Testing to see if this is connected");

///true&&true= true
// true&&false= false
// false&&true= false
// false&&false= false

//true||true=true
// true||false=false
// false||true=false
// false||false=false

// if the price of 3DS is less than budget lets buy it

var budget = 100;
var dsPrice = 169;
var paycheck = 600;

if(dsPrice<budget && paycheck> 500){
    console.log("Buy the 3DS!");
} else{
    console.log("Do not buy the 3DS! Because you are broke");

}

// Lets buy a smart tv if it is less than our budget OR we won the lottery

var tvPrice = 540
var tvBudget = 500
var wonLottery = true;

if(tvPrice>tvBudget || wonLottery){

    console.log("Lets go buy a tv");

} else {
    console.log("Stick with your small tv!");
}
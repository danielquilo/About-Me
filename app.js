"use strict";
let userPoints = 0

const number= 5;



let user = prompt(" Hello Visitor, What is your name? ");
// console.log(" Great Welcome ");
alert(" Welcome " + user + " Let's start with some knowledge test ");

let guess = prompt( user + " Choose a Number between 01 and 10 ");

for (let i = 3; i >= 0; i--){
if (i == 0) {
  alert(" Unlock this was your last attempt the number  was " + number);
break; 
}
if (guess < number) {
  alert(" To Low, choose again.");
  guess=prompt(" Please " + user + " The correct number is " + i + " attempts left.");
  } else if ( guess > number) {
    alert( " to high, guess again.");
    guess=prompt("  The correct number is " + i + " attempts left." );
  } else {
    userPoints++;
    alert("Well done, that's Correct. You have" + userPoints + " points /6 ");
    break;
  }
}

let brand = prompt(user + " Ever heard of android before?)( Please answer yes / no or y/n )");
if (brand.toLowerCase() === "yes" || brand.toLowerCase() === "y") {
  // console.log(" You're correct, you can access website!!  ");
  userPoints++;
  alert( user + " You're correct, " +  user + " you score " +  userPoints + " points!"); 
} else {
  alert( user + " You're wrong! " + user + " You don't score. You still have " + userPoints + " points /6 !");
} 

let comparative = prompt(user + " Are Android and Samsung the same?)(Please answer yes / no or y/n )");
if (comparative.toLowerCase() === "yes" || comparative.toLowerCase() === "y") {
  // console.log(" Well done ");
  userPoints++;
  alert( user + " Great answer! " + user + " you score " + userPoints + " points /6 !");
} else {
  alert( user + " You're wrong! " + user + " You don't score. You still have " + userPoints + " points /6 !");
}

let software = prompt(user + " Is android app developer software free?)( Please answer yes / no or y/n )");
if (software.toLocaleLowerCase() === "yes" || software.toLocaleLowerCase() === "y") {
  // console.log("Software free!");
  userPoints++;
  alert(user + " Amazing! " + user +  " you score " + userPoints + " points! ");
} else {
  alert( user + " You're wrong! " + user + " You don't score. You still have " + userPoints + " points /6 !");
}
let owner = prompt(user + " Does Google own all Android?)( Please answer yes / no or y/n )");
if (owner.toLocaleLowerCase() === "yes" || owner.toLocaleLowerCase() === "y") {
  // console.log(" it is owned by Google. ");
  userPoints++;
  alert(user + " It is owned by Google! " + user +  " you score " + userPoints + " points /6 !" );
} else {
  alert( user + " You're wrong! " + user + " You don't score. You still have " + userPoints + " points! ");
  }

let ios = prompt(user + " What do you think android is better ios? )( Please answer yes / no or y/n )");
if (ios.toLocaleLowerCase() === "yes" || ios.toLocaleLowerCase() === "y") {
 // console.log( " Android is better ");
  userPoints++;
  alert( user + " Congratulations, " +  user + " you score " +  userPoints + " points /6 !"); 
} else {
  alert( user + " You're wrong! " + user + " You don't score. You still have " + userPoints + " points /6 !");
}


















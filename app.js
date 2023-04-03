
let userPoints = 0

const number= 5;

let user = prompt(" Hello Visitor, What is your name? ");
// console.log(" Great Welcome ");
alert(" Welcome " + user + " my website ");

/*-------------------
Question One
--------------------*/
function  questionOne(){


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
}

/*-------------------
Question Two
--------------------*/

function questionTwo() {
let brand = prompt(user + " Ever heard of android before?)( Please answer yes / no or y/n )").toLocaleLowerCase();

while (brand != "yes" && brand != "y" && brand != "no" && brand != "n") {
  alert(`Please answer using Yes, Y, No or N only!`);
  brand = prompt(
    `Ever heard of android before?`
  ).toLowerCase();
}
if (brand.toLowerCase() === "yes" || brand.toLowerCase() === "y") {
  // console.log(" You're correct, you can access website!!  ");
  userPoints++;
  alert( user + " You're correct, " +  user + " you score " +  userPoints + " points!"); 
} else if (brand === "no" || brand === "n") {
  alert( user + " You're wrong! " + user + " You don't score. You still have " + userPoints + " points /6 !");
} 
}

/*-------------------
Question Three
--------------------*/

function questionThree(){
let comparative = prompt(user + " Are Android and Samsung the same?)(Please answer yes / no or y/n )");

while (comparative != "yes" && comparative != "y" && comparative != "no" && comparative != "n") {
  alert(`Please answer using Yes, Y, No or N only!`);
  comparative = prompt(
    `Are Android and Samsung the same?`
  ).toLowerCase();
}

if (comparative.toLowerCase() === "yes" || comparative.toLowerCase() === "y") {
  // console.log(" Well done ");
  userPoints++;
  alert( user + " Great answer! " + user + " you score " + userPoints + " points /6 !");


} else if (comparative === "no" || comparative === "n") {
  alert( user + " You're wrong! " + user + " You don't score. You still have " + userPoints + " points /6 !");
}
}

/*-------------------
Question Four
--------------------*/

function questionfour(){
let software = prompt(user + " Is android app developer software free?)( Please answer yes / no or y/n )");
if (software.toLocaleLowerCase() === "yes" || software.toLocaleLowerCase() === "y") {
  // console.log("Software free!");
  userPoints++;
  alert(user + " Amazing! " + user +  " you score " + userPoints + " points /6 !");
} else if (software === "no" || software === "n") {
  alert( user + " You're wrong! " + user + " You don't score. You still have " + userPoints + " points /6 !");
}
}

/*-------------------
Question Five
--------------------*/

function questionFive(){
let owner = prompt(user + " Does Google own all Android?)( Please answer yes / no or y/n )");
if (owner.toLocaleLowerCase() === "yes" || owner.toLocaleLowerCase() === "y") {
  // console.log(" it is owned by Google. ");
  userPoints++;
  alert(user + " It is owned by Google! " + user +  " you score " + userPoints + " points /6 !" );
} else if (owner === "no" || owner === "n") {
  alert( user + " You're wrong! " + user + " You don't score. You still have " + userPoints + " points! ");
  }
}

/*-------------------
Question Six
--------------------*/

function questionsix(){
let ios = prompt(user + " What do you think android is better ios? )( Please answer yes / no or y/n )");
if (ios.toLocaleLowerCase() === "yes" || ios.toLocaleLowerCase() === "y") {
 // console.log( " Android is better ");
  userPoints++;
  alert( user + " Congratulations, " +  user + " you score " +  userPoints + " points /6 !"); 
} else if (ios === "no" || ios === "n") {
  alert( user + " You're wrong! " + user + " You don't score. You still have " + userPoints + " points /6 !");
}
}

/*-------------------------
Question Seven
--------------------------*/



function questionSeven() {

  let answer = ["Samsung Galaxy S23", " Samsung Galaxy S21", "Samsung. Galaxy Note 20 "];

  let user = prompt(" Which version of phone is best, You have 6 attampts.").toLowerCase();

  // console.log(" Great Welcome ");
  

  for (let i = 5; i >= 0; i--){
    if (i == 0) {
      alert(" You have no more attempts left. The correct answers was Samsung Galaxy S23", " Samsung Galaxy S21, Samsung. Galaxy Note 20.  " + number
      );
    break; 
    }


    if (guess === answers[0]) {
      points++;
      alert(
        `Correct,  Samsung Galaxy S23 . You could have also answered Samsung Galaxy S21, Samsung or Galaxy Note 20.`
      );
      break;
    } else if (guess === answers[1]) {
      points++;
      alert(
        `Correct,Samsung Galaxy S21 . You could have also answered Samsung Galaxy S21 or Galaxy Note 20 `
      );
      break;
    } else if (guess === answers[2]) {
      points++;
      alert(
        `Correct, Galaxy Note 20. You could have also answered Samsung Galaxy S23 or Samsung Galaxy S21`
      );
      break;
    } else {
      console.log("lose");
      guess = prompt(
        `I have not been to ${guess}! Tell a phone you have? You have ${i} attempts left.`
      ).toLowerCase();
    }
  }
}



/*---------------------------------------------------
Quiz Button .addEventListner("Click" function(){})
----------------------------------------------------*/

document.getElementById("quiz-btn").addEventListener("click", function() {
  questionOne()
  questionTwo()
  questionThree()
  questionfour()
  questionFive()
  questionsix()
  questionSeven() 
}  )






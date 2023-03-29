"use strict";
let user = prompt("Hello Visitor, What is your name?");
console.log(" Great Welcome ");
alert("Welcome " + user + " You will have all android information here");

let brand = prompt(user + " Ever heard of android before?)( Please answer yes / no or y/n )");
if (brand.toLowerCase() === "yes" || brand.toLowerCase() === "y") {
  console.log(" You're correct, you can access website!!  ");
  alert(user + " You're correct, you can access website!!");
} else {
  alert(user + " you're wrong!");
}

let comparative = prompt(user + " Are Android and Samsung the same?)(Please answer yes / no or y/n )");
if (comparative.toLowerCase() === "yes" || comparative.toLowerCase() === "y") {
  console.log(" Well done ");
  alert(user + " Great answer!");
} else {
  alert("Let's try again!");
}

let software = prompt(user + " Is android app developer software free?)( Please answer yes / no or y/n )");
if (software.toLocaleLowerCase() === "yes" || software.toLocaleLowerCase() === "y") {
  console.log("Software free!");
  alert(user + " Amazing ");
} else {
  alert(user + "Wrong answer, tryng again Please!");
}

let owner = prompt(user + " Does Google own all Android?)( Please answer yes / no or y/n )");
if (owner.toLocaleLowerCase() === "yes" || owner.toLocaleLowerCase() === "y") {
  console.log(" it is owned by Google. ");
  alert(user + " It is owned by Google.!");
} else {
  alert(user + "Let's try again please!");
}

// *********Chapter 38-42*******     Assignment 9 *****   Task 1

//// var value = +prompt("Enter a Value");
//// var power = +prompt("Enter a Power Value");
//// var value1 = value;
//// for (var i = power; i > 1; i--) {
////   value = value * value1;
//// }
//// document.write(value);

//// var value = +prompt("Enter a Value");
//// var power = +prompt("Enter a Power Value");
//// var value1 = value;
//// while (power > 1) {
////   value = value * value1;
////   power--;
//// }
//// document.write("<br>" + value);

// *********Chapter 38-42*******     Assignment 9 *****   Task 2

// function checkYear(Year) {
//   var leap = year % 4;
//   if (leap == 0) {
//     document.write(Year + " is a Leap Year");
//   }
// }
// var year = +prompt("Enter Your Year");
// checkYear(year);

// *********Chapter 38-42*******     Assignment 9 *****   Task 3

// function calSemiPerimeter(a2, b2, c2) {
//   var semiPerimeter = (a2 + b2 + c2) / 2;
//   return semiPerimeter;
// }
// function calArea(a1, b1, c1) {
//   var semi = calSemiPerimeter(a1, b1, c1);
//   var area = semi * (semi - a1) * (semi - b1) * (semi - c1);
//   document.write("Semeperimeter of a Triangle is " + semi);
//   document.write("<br><br>Area of a Triangle is " + area);
// }
// var a = +prompt("Enter Sides of a Triangle");
// var b = +prompt("Enter Sides of a Triangle");
// var c = +prompt("Enter Sides of a Triangle");
// calArea(a, b, c);

// *********Chapter 38-42*******     Assignment 9 *****   Task 4

// function calAvg(marks1, marks2, marks3) {
//   var avgValue = (marks1 + marks2 + marks3) / 3;
//   return avgValue;
// }

// function calPercentage(marks1, marks2, marks3) {
//   var percentValue = ((marks1 + marks2 + marks3) / 300) * 100;
//   return percentValue;
// }

// function mainFunction(marks1, marks2, marks3) {
//   var avgValue = calAvg(marks1, marks2, marks3);
//   var percentValue = calPercentage(marks1, marks2, marks3);
//   document.write(
//     "Marks of Subject 1: " +
//       marks1 +
//       "<br>Marks of Subject 2: " +
//       marks2 +
//       "<br>Marks of Subject 3: " +
//       marks3
//   );
//   document.write("<br>Average Marks is " + avgValue);
//   document.write("<br>Percentage is " + percentValue);
// }

// var sub1 = +prompt("Enter Your Subject 1 Marks");
// var sub2 = +prompt("Enter Your Subject 2 Marks");
// var sub3 = +prompt("Enter Your Subject 3 Marks");
// mainFunction(sub1, sub2, sub3);

// *********Chapter 38-42*******     Assignment 9 *****   Task 5

//// Normal logic of indexOf() function is
//  var string=Hello Word;
//  string.indexof("o");   ----->4(Result)   --->in search pass string

// function ownIndex(passString, passValue) {
//   //// Thats why here both value pass and search letter in a word

//   for (var i = 0; i < passString.length; i++) {
//     if (passString[i] == passValue) {
//       //   console.log(i);
//       document.write(
//         "Your Input Word is: " +
//           passString +
//           "<br>Your Search Letter '" +
//           letter +
//           "' Index is: " +
//           i
//       );
//       break;
//     }
//   }
// }
// var word = prompt("Enter a Word");
// var letter = prompt("Enter a Letter");
// ownIndex(word, letter);

// *********Chapter 38-42*******     Assignment 9 *****   Task 6

// function vowelRemove(word) {
//   var newWord = word.replace(/[aeiou]/g, ""); //"g" represent every value of vowel
//   //   console.log(newWord);
//   document.write(
//     "Enter Sentence: " + word + "<br>Without Vowel Sentence: " + newWord
//   );
// }
// var word = prompt("Enter a Word");
// vowelRemove(word);

// *********Chapter 38-42*******     Assignment 9 *****   Task 7

// // Can't Understand how to solve Kindly Guide.

// *********Chapter 38-42*******     Assignment 9 *****   Task 8

// function convMeter(input) {
//   var meter = input * 1000;
//   document.write("<br>In Meter : " + meter);
// }
// function convFeet(input) {
//   var feet = input * 1000 * 3.28084;
//   document.write("<br><br>In Feet : " + feet);
// }
// function convInches(input) {
//   var inches = input * 1000 * 39.3701;
//   document.write("<br><br>In Inches : " + inches);
// }
// function convCenti(input) {
//   var centimeter = input * 1000 * 100;
//   document.write("<br><br>In Centimeter : " + centimeter);
// }
// var input = prompt("Enter A Value");
// document.write(" <h1>" + input + " Killometer Equals</h1>");
// convMeter(input);
// convCenti(input);
// convFeet(input);
// convInches(input);

// *********Chapter 38-42*******     Assignment 9 *****   Task 9

// var basic = +prompt("Enter Your Basic Salary");
// var hour = +prompt("Enter Your Overtime Hour");
// if (hour > 0) {
//   document.write(
//     "Your Basic Salary is : " +
//       basic +
//       "<br>Your Overtime Salary is : " +
//       hour * 12 +
//       "<br> Your Salary Becomes : " +
//       (basic + hour * 12)
//   );
// }

// *********Chapter 38-42*******     Assignment 9 *****   Task 10

// var amount = +prompt("Enter amount to withdraw!");
// var hund = 0;
// var fifty = 0;
// var ten = 0;
// for (i = amount; amount > 0; i) {
//   //   console.log("amount " + amount);
//   if (100 <= amount) {
//     hund++;
//     amount = amount - 100;
//     // console.log("hundred " + hund);
//     // console.log("amount " + amount);
//   }
//   if (50 <= amount && amount < 100) {
//     fifty++;
//     amount = amount - 50;
//   }
//   if (0 < amount && amount < 50) {
//     ten++;
//     amount = amount - 10;
//   }
// }
// document.write("<br>Amount With-Draw " + i);
// document.write(
//   "<br><b>You will have  " +
//     hund +
//     " Hundred notes " +
//     fifty +
//     " Fifty notes " +
//     ten +
//     " tens notes</b>"
// );

// *********Chapter 43-48*******     Assignment 9 *****   Task 1

// // on index.html

// *********Chapter 43-48*******     Assignment 9 *****   Task 2

// // on index.html

// *********Chapter 43-48*******     Assignment 9 *****   Task 3

// var list = document.getElementById("list");
// list.innerHTML = "Hello 10";
// list.innerHTML = "Hello 10";

//Not understand how wo solve

// *********Chapter 43-48*******     Assignment 9 *****   Task 4

// // on index.html

// *********Chapter 43-48*******     Assignment 9 *****   Task 5

// 1st error no same name i.e   counter=document....getid(counter) is wrong X
// 2nd variable counter shoud be zero

// var counter = 0; //it must be different than element by ID
// var counterhead = document.getElementById("counter");
// function counterStart() {
//   counter++;
//   counterhead.innerHTML = counter;
//   // console.log("counter");
// }
// function start() {
//   interval = setInterval(counterStart, 1000);
// }
// function stop() {
//   clearInterval(interval);
// }

// *********Chapter 49-52*******     Assignment 9 *****   Task 1
var fName = 0;
var lName = 0;
var email = 0;
var passWord = 0;
var conpass;
function info() {
  fName = document.getElementById("firstName");
  console.log(fName.value);
  alert("First Name:" + firstName.value);
  fName.value = "";
  lName = document.getElementById("lastName");
  console.log(lName.value);
  alert("Last Name:" + lName.value);
  lName.value = "";
  email = document.getElementById("email");
  console.log(email.value);
  alert("Email Address:" + email.value);
  email.value = "";
  passWord = document.getElementById("password");
  console.log(passWord.value);
  alert("Password:" + passWord.value);
  passWord.value = "";
  conpass = document.getElementById("confpassword");
  console.log(conpass.value);
  conpass.value = "";
}

// *********Chapter 49-52*******     Assignment 9 *****   Task 2
// *********Chapter 49-52*******     Assignment 9 *****   Task 3

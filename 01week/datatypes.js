"use strict";

//1.Write a JavaScript program to display the current day and time.
alert(Date());
//2.Write a JavaScript program to convert a number to a string.
const num = 10;
const n = num.toString();
alert(n);
//3.Write a JavaScript program to convert a string to the number.
Number('123');
/*4.Write a JavaScript program that takes in different datatypes and prints out whether they are a:
Boolean
Null
Undefined
Number
NaN
String*/
alert(typeof 1) 
//5.Write a JavaScript program that adds 2 numbers together.
const c = a + b;
const a = 5;
const b = 4;
alert(a+b);
//6.Write a JavaScript program that runs only when 2 things are true.
if (5 > 0 && 0 < 3) {
  alert("true");
} 
//7.Write a JavaScript program that runs when 1 of 2 things are true.
if (5 > 0 && 0 < 3) {
  alert("true");
} else {
  alert("false");
}
//Write a JavaScript program that runs when both things are not true.
if (!(5 > 6) && !(4 < 3)) {
  alert("false");
} 
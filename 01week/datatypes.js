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
//1.undefined check
if (typeof xyz === "undefined")alert("xyz is undefined");

//2.null check-This one was hard to find!
Object.prototype.isNullOrEmpty = function(value){
  return (!value);
}
Object.prototype.isNullOrEmpty('')
//3. number check
if (typeof 5 === 'number')alert("this is a number");
//4. boolean check
if (typeof true === 'boolean')alert("this is a boolean");
if (typeof false === 'boolean')alert("this is a boolean");
//5.string check
if (typeof 'smurf' === 'string')alert("this is a string");
//6. NaN check-this was not easy!
const checkNum=(x)=>{
  if (isNaN(x)) {
    return 'not a number!';
  }
  return x;
}

console.log(checkNum('3f66'));
// expected output Not a number!

console.log(checkNum('455'));
// expected output 455
//5.Write a JavaScript program that adds 2 numbers together.
const addTwoNums=(num1, num2)=>{
  return num1+num2
}
addTwoNums(5,6)
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
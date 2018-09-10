// for loop
// Use a for loop to console.log each item in the array carsInReverse.
const carsInReverse = [
  'Ford',
  'Dodge',
  'Toyota',
  'Chevy'
]
for (let x = 0; x < carsInReverse.length; x++) {
  // console.log(carsInReverse[x]);
}
// carsInReverse.forEach(function(i){console.log([i])})


// for...in loop
// Create an object (an array with keys and values) called persons with the following data:
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
}

// Use a for...in loop to console.log each key.

// for (var key in persons) {
//     var value = persons[key];

// }
// console.log(value);
// let test = {a: 1, b: 2, c: 3};

// for (let [key] of Object.entries(persons)) {
//     console.log(key);
// }
for (let x in persons) {
  console.log(x)
}
for (let x in persons) {
  if (x === 'birthDate')
    console.log(persons[x])

}
//var obj = {a: 1, b: 2, c: 3};

for (const prop in persons) {
  //console.log(`persons.${prop} = ${persons[prop]}`);
}


// Then use a for...in loop and if state to console.log the value associated with the key birthDate.
for (const prop in persons) {
  // console.log(`persons.${prop} = ${persons[prop]}`);
}

for (const prop in persons) {
  if (persons.hasOwnProperty(prop)) {
    // console.log(`persons.${prop} = ${persons[prop]}`);
  }
}
// while loop-
// Use a for loop to console.log the numbers 1 to 1000.
// let i = 0;
// while (i <= 1000) { // shows 0, then 1, then 2
//   console.log(i);
//   i++;
// }


// do...while loop
// Use a do...while loop to console.log the numbers from 1 to 1000.
// let num = 0;
// do {num += 1;
//   // console.log(num);
// } while (num < 1000);

let i = 0;
do {
  console.log(i)
  i++
} while (i <= 1000)

// When is a for loop better than a while loop?
// A for loop is generally used if the number of loops is known, a while loop is generally for an unknown number of loops. Also instead of 'x<4', try 'x<array.length'. The use of the length property makes for more versatile code. If you at a later time add more elements to the array you would also have to change your for loop.

// How is the readability of the code affected?
//for loop is more readable then a while loop.

// What is the difference between a for loop and a for...in loop?-----
// It depends on what you need. I usually use for-in loop because it is a shorter form, but sometimes you may want to have control over the iteration variable. For instance, if you want to iterate over even indices, you'd need to use the normal for loop:

// for (var i = 0; i < myarray.length; i+=2) {...}
// The same applies, for example, if you want to iterate backwards:

// for (var i = myarray.length-1; i >= 0; i--) {...}
// Certainly, for objects, the for-in loop allows you to get the property name in the iteration variable. For example:

// var myobject = {year: 1992, city: "Barcelona"}
// for (var propname in myobject) alert(propname + " = " + myobject[propname]);
// In your example, I'd use for-in because you are doing a simple iteration. Moreover I think in a non-optimized Javascript compiler/interpreter, the for-in loop would be even faster because variable increment is done internally (i.e. it is not a Javascript statement such as "i++").

// What is the difference between a while loop and a do...while loop?
// While- your condition is at the begin of the loop block, and makes possible to never enter the loop.
// In While loop, the condition is first tested and then the block of code is executed if the test result is true.
// Do While- your condition is at the end of the loop block, and makes obligatory to enter the loop at least one time.
// In  D0-While, the code is first executed and then the condition is checked.  The next iteration is executed if the test result is true.

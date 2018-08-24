'use strict';

const assert = require('assert');
const users = [{
  id: 3393,
  name: 'steve rogers',
  age: 100
},
{
  id: 53,
  name: 'tony stark',
  age: 40
},
{
  id: 7,
  name: 'peter quill',
  age: 30
},
{
  id: 102,
  name: 'wanda maximoff',
  age: 25
},
{
  id: 69,
  name: 'gamora',
  age: 35
},
];
//use forEach to console.log each user object. Assign the return of this forEach to a variable called forEachTest.

Object.keys(users).forEach(function(key) {
  forEachTest = (key, users[key]);
  console.log(forEachTest);
});



//use map to create a new array with all of the user's names. Assign the return of the map to a variable called mapTest.
const mapTest = users.map(function (user) {
  return user.name;
});
const mapTest = users.map(user => user.name);
console.log(mapTest);


//use filter to create a new array with only the users that have an age of 40 or above. Assign the return of the filter to a variable called filterTest.
const filterTest = users.filter(function (user) {
  return user.age >= 40;
});
console.log(filterTest)

//use some to determine if there is at least one user with an id of greater than 1000. Assign the return of some to a variable called someTest

const someTest = users.some((user)=>{
  return user.id > 1000;
});
console.log(someTest)
same
const someTest = users.some((item,index)=>{
  return item.id > 1000;
});
console.log(someTest)

//use every to determine if there if all of the users have the letter 's' in their name. Assign the return of some to a variable called everyTest
const everyTest = users.every((item,index)=>{
  console.log(item.name.indexOf('s'),item.name);
  return item.name.indexOf('s') != -1;
});
console.log(everyTest)


//use find to find the user with the id of 102. Assign the find return to a variable called findTest

//console log findTest
const findTest = users.find((user)=>{
  return user.id === 102;
});
console.log(findTest)
//same
const findTest = users.find((item,index)=>{
  return item.id === 102;
});
console.log(findTest)
//how to acess just the name
const findTest = users.find((item,index)=>{
  return item.id === 102;
});
console.log(findTest.name)




if (typeof describe === 'function') {

  describe('#forEach()', () => {
    it('should call the callback the array.length number of times', () => {
      let count = 0;
      forEach([1, 2, 3], () => {
        count++;
      });
      assert.equal(count, 3);
    });
  });

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#some()', () => {
    let count = 0;
    const somed = some([1, 2, 3, 4], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return true if at least one item passes the predicate test', () => {
      assert.equal(somed, true);
    });
    it('should stop at the first item that passes the predicate test', () => {
      assert.equal(count, 2);
    });
    it('should return false if no items pass the predicate test', () => {
      const somed = some([1, 3, 5], (num) => {
        return num % 2 === 0;
      });
      assert.equal(somed, false);
    });
  });

  describe('#every()', () => {
    it('should return true if at all passes the predicate test', () => {
      const everied = every([2, 4, 6], (num) => {
        return num % 2 === 0;
      });
      assert.equal(everied, true);
    });
    let count = 0;
    const everied = every([2, 3, 4, 5], (num) => {
      count++;
      return num % 2 === 0;
    });
    it('should return false if any item fails the predicate test', () => {
      assert.equal(everied, false);
    });
    it('should stop at the first item that fails the predicate test', () => {
      assert.equal(count, 2);
    });
  });

} else {

  console.log('Only run the tests on this one!')

}

'use strict'

const users = ['Michael Phelps','Hope Solo','Diana Lopez','Kara Patterson','Amanda Furrer']
const anotherUserList = ['sue','john','roger']

const printListOfOlympians=(nameArr)=>{
  nameArr.forEach((name, i)=>{
    console.log(i);
  });
}
printListOfOlympians(users)
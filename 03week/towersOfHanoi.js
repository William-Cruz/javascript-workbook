'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//make the 2 tests for this function 
const movePiece = (valueInArrB4Move, valueInArrB4Drop) => {
  if(isLegal(valueInArrB4Move[valueInArrB4Move.length-1], valueInArrB4Drop[valueInArrB4Drop.length-1])){
    const valueOfPickedPiece = valueInArrB4Move.pop();
    const valueOfArrAfterPieceDop = valueInArrB4Drop.push(valueOfPickedPiece);
    return valueOfArrAfterPieceDop
    //returns the length of the new array where you placed the item
  } 
}

// function compares valueInArrB4Move last item value == valueInArrB4Drop last item value
const isLegal = (valueInArrB4Move, valueInArrB4Drop)=>{
  if(valueInArrB4Drop === undefined || valueInArrB4Move <= valueInArrB4Drop){
    return true
  } else {
    console.log(false)
    return false
  }
}

const legalMove = (startStack, endStack) =>{
  
}

const checkForWin = (valueInArrB4Move, valueInArrB4Drop) => {
  if(stacks.b.length === 4 || stacks.c.length === 4){
    
    console.log('you won')
  } else {
    
    return false
  }
}

const towersOfHanoi = (startStack, endStack) => { 
  //what the array looks like before you move the last item in the key you are inputing in startStack
  const valueInArrB4Move = stacks[startStack];

  //what the array looks like before you place the last item in the key you are inputing in endStack
  const valueInArrB4Drop = stacks[endStack];

  if(movePiece(valueInArrB4Move, valueInArrB4Drop)){
    if(checkForWin(valueInArrB4Move, valueInArrB4Drop)){
      
    }
  } else {
  }   
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}

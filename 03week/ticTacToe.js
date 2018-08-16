'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
let turn = 0;
//switchPlayer function job is to switch between players
const switchPlayer=(row,column)=> {
  if(playerTurn ==='X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }
}
//this printBoard to the terminal
function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//rules for every horizontal win
const horizontalWin=()=> {
  console.log('playerTurn=',playerTurn)
  if(board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) {
    return true;
  } else if (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) {
    return true;
  } else if (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn) {
    return true;
  } else {
    return false;
  }
}

//rules for every vertical win
const verticalWin=()=>{
  if(board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) {
    return true;
  } else if (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) {
    return true;
  } else if (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn) {
    return true;
  } else {
    return false;
  }
}

//rules for every diaganol win
function diagonalWin() {
  if(board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) {
    return true;
  } else if (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn) {
    return true;
  } else {
    return false;
  }
}

//this function checks for win 
const checkForWin=()=>{
  if(horizontalWin()) {
    console.log('Horizontal Win!')
    return true;
  } else if (verticalWin()) {
    console.log('Vertical Win!')
    return true;
  } else if (diagnalWin()) {
    console.log('Diagnal Win!')
    return true;
  }
}
  
//this function checks for a valid input
const isInputValid=(row,column)=>{
  if((row === '0'|| row === '1'|| row === '2') && (column==='0'||column==='1'||column==='2') && (board[row][column] === ' ')){
    return true ;
  } else {
    return false;
  }
}

//parent function 
function ticTacToe(row, column) {
  if (isInputValid(row, column)) {
    board[row][column] = playerTurn;
    turn++;
    console.log(turn)
    if (checkForWin()) {
      board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      playerTurn = 'X';
    } else {
      switchPlayer(row, column)
    }
    if (turn === 9) {
      console.log('GAME OVER')
      board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      playerTurn ='X';
    } else{
      switchPlayer(row,column)
    }
  } else {
    console.log('Invalid Move')
  }
}
//checks for a tie
const isATie = (turn)=>{
  if(turn > 9){
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}


function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], 
                                [' ', 'X', ' '], 
                                [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], 
                                [' ', 'X', ' '], 
                                [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], 
                [' ', 'X', ' '], 
                [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], 
                [' ', ' ', ' '], 
                [' ', ' ', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], 
                [' ', 'X', ' '], 
                [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}

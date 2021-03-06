'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

class Checker {
	constructor(color){
		if (color === 'white'){
			this.symbol = 'W';
		}else{
			this.symbol = 'B';
		}
	}
}



class Board {
	constructor() {
		this.checkers = [];
		this.grid = [];
	}
	// method that creates an 8x8 array, filled with null values
	createGrid() {
		// loop to create the 8 rows
		for (let row = 0; row < 8; row++) {
			this.grid[row] = [];
			// push in 8 columns of nulls
			for (let column = 0; column < 8; column++) {
				this.grid[row].push(null);
			}
		}
	}
  
	viewGrid() {
		// add our column numbers
		const string = '  0 1 2 3 4 5 6 7\n';
			// we start with our row number in our array
			const rowOfCheckers = [row];
			// a loop within a loop
			for (let column = 0; column < 8; column++) {
				// if the location is "truthy" (contains a checker piece, in this case)
				if (this.grid[row][column]) {
					// push the symbol of the check in that location into the array
					rowOfCheckers.push(this.grid[row][column].symbol);
				} else {
					// just push in a blank space
					rowOfCheckers.push(' ');
				}
			}
			// join the rowOfCheckers array to a string, separated by a space
			string += rowOfCheckers.join(' ');
			// add a 'new line'
			string += '\n';
		}
		console.log(string);
	}

	//this is the 'W' checker pieces location on the board.

	createCheckers(){
		// [row, column]
		const whitePosition = [
			[0, 1],
			[0, 3],
			[0, 5],
			[0, 7],
			[1, 0],
			[1, 2],
			[1, 4],
			[1, 6],
			[2, 1],
			[2, 3],
			[2, 5],
			[2, 7]
		];
		for (let i = 0; i < 12; i++) {
			const whiteRow = whitePosition[i][0];
			const whiteColumn = whitePosition[i][1];
			const whiteChecker = new Checker('white');
			this.checkers.push(whiteChecker);
			this.grid[whiteRow][whiteColumn] = whiteChecker;
		}
		//this is the 'B' checker pieces location on the board.
		const blackPosition = [
			[5, 0],
			[5, 2],
			[5, 4],
			[5, 6],
			[6, 1],
			[6, 3],
			[6, 5],
			[6, 7],
			[7, 0],
			[7, 2],
			[7, 4],
			[7, 6]
		];
		for (let i = 0; i < 12; i++) {
			const blackRow = blackPosition[i][0];
			const blackColumn = blackPosition[i][1];
			const blackChecker = new Checker('black');
			this.checkers.push(blackChecker);
			this.grid[blackRow][blackColumn] = blackChecker;
		}
	}
}
  


class Game {
	constructor() {
		this.board = new Board;
	}
	start() {
		this.board.createGrid();
		this.board.createCheckers();
	}
	//how to move the game piece from one spot to the next on the board
	moveChecker (source, destination) {
		if (isLegalInput(source, destination) && 
    isLegalMove (source, destination)) {

			const sourceRow = parseInt(source.charAt(0));
			const sourceColumn = parseInt(source.charAt(1));
			const destinationRow = parseInt(destination.charAt(0));
			const destinationColumn = parseInt(destination.charAt(1));
			this.board.grid[destinationRow][destinationColumn] = 
    this.board.grid[sourceRow][sourceColumn];
			this.board.grid[sourceRow][sourceColumn] = null;
			if (Math.abs(destinationRow - sourceRow) === 2) {
				const jumpedRow = destinationRow - sourceRow  > 0 ?
					sourceRow + 1 : destinationRow + 1;
				const jumpedColumn = destinationColumn -
      sourceColumn > 0 ? sourceColumn + 1 :
					destinationColumn + 1;
				this.board.grid[jumpedRow][jumpedColumn] = null;
				this.board.checkers.pop();
			}
		}else{
			console.log('Illegal Move');
		}
	}
}

//code for what is a valid character input
const isLegalInput = (source, destination) => {
	const sourceRow = parseInt(source.charAt(0));
	const sourceColumn = parseInt(source.charAt(1));
	const destinationRow = parseInt(destination.charAt(0));
	const destinationColumn = parseInt(destination.charAt(1));
	const sourceGood = (sourceRow >= 0 && sourceRow < 8) && (sourceColumn >= 0 && sourceColumn < 8);
	const destinationGood = (destinationRow >= 0 && destinationColumn < 8);
	return (sourceGood && destinationGood);
};
//code for what is a legal move
const isLegalMove = (source, destination) => {
	const sourceRow = parseInt(source.charAt(0));
	const sourceColumn = parseInt(source.charAt(1));
	const destinationRow = parseInt(destination.charAt(0));
	const destinationColumn = parseInt(destination.charAt(1));
	const goodRowMove = (Math.abs(destinationRow - sourceRow)<=2);
	const goodColumnMove = (Math.abs(destinationColumn - sourceColumn)===1);
	return (goodRowMove && goodColumnMove);
 
};



function getPrompt() {
	game.board.viewGrid();
	rl.question('which piece?: ', (whichPiece) => {
		rl.question('to where?: ', (toWhere) => {
			game.moveChecker(whichPiece, toWhere);
			getPrompt();
		});
	});
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
	describe('Game', () => {
		it('should have a board', () => {
			assert.equal(game.board.constructor.name, 'Board');
		});
		it('board should have 24 checkers', () => {
			assert.equal(game.board.checkers.length, 24);
		});
	});

	describe('Game.moveChecker()', () => {
		it('should move a checker', () => {
			assert(!game.board.grid[4][1]);
			game.moveChecker('50', '41');
			assert(game.board.grid[4][1]);
			game.moveChecker('21', '30');
			assert(game.board.grid[3][0]);
			game.moveChecker('52', '43');
			assert(game.board.grid[4][3]);
		});
		it('should be able to jump over and kill another checker', () => {
			game.moveChecker('30', '52');
			assert(game.board.grid[5][2]);
			assert(!game.board.grid[4][1]);
			assert.equal(game.board.checkers.length, 23);
		});
	});
} else {
	getPrompt();
}

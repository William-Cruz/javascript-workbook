'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  var firstPosition = findFirstVowelPosition(word);
  if (firstPosition >0){
    return word.slice(firstPosition) + word.slice(0,firstPosition) + 'ay';
  }
  return word + 'yay';
}
  
function findFirstVowelPosition(word){
  for (var i=0; i<word.length; i++){
    if ('aeiouy'.indexOf(word[i])!==-1){
      return i;
    }
  }
}


// Your code here
/* validInput function checks to see if the word used is a string and not a number

lowercaseTrim transforms the word to lower case and deletes spaces

vowelsPlusY takes all the vowels plus y ['a','e','i','o','u','y'] checks for a word that begins 
with a vowel and adds yay to the end

consantAy checks begining of word for consanont takes first 
consonant and moves it to the rear and starts over until it comes to a vowel it stops and 
adds ay to the word
*/  




function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

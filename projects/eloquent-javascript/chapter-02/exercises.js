
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Create a loop that makes seven calls to console.log to make a triangle
function triangles(num) {
    for (let i = 1; i <= num; i++) {
        console.log('#'.repeat(i));
    }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Create a loop that prints all number from 1 - 100
// For numbers divisable (%) by 3, print 'Fiz'
// For numbers divisable by 5 and now 3, pring 'Buzz'
// For numbers divisable by 5 and 3  print 'Fizz Buzz'

function fizzBuzz() {
  for (let i = 1; i < 16; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
          console.log('fizz');
      } else if (i % 5 === 0 && i % 3 !== 0) {
          console.log('buzz');
      } else if (i % 3 === 0 && i % 5 === 0) {
          console.log('fizzbuzz');
      } else {  
          console.log(i);
      }

}
}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create fuction drawChessboard that creates a string representing an 8 x 8 grid
// using newline characters, use " " spaces and '#'
function drawChessboard(num) {
    
    let chessBoard = ''
    for (let i = 0; i <= num; i++) {
          for (let j = 0; j <= num; j++) {
              if ((i + j) % 2 === 0) {
                  chessBoard += ' ';
              } else {
                  chessBoard += '#';
              }
        } chessBoard += '\n';
    } 
    
    } console.log(chessBoard);
    


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}

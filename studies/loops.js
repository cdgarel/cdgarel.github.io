// Loops //
// 1. While, For, & For In Loops //
/* The While loop loops through a block of code while a specified condition is true. An 
 * incrementer (i++) is used to increase the value used in the condition. The i++ is placed
 * inside of the code block. The starting condition is above the loop. 
 *          var count = 0;  
 *          Syntax:     while (condition) {
 *                            code block;
 *                            i++
 *                      }
 * 
 * The for loop loops through a block of code a number of times. It consists of a starting 
 * condition, a stopping condition, an incrementor, (all listed in the condition, separated 
 * by a semi colon), and the code block.
 *          Syntax:     for (var i = 0, i < 5, i++)   {
 *                              code block;
 *                      }  
 * 
 * The for in loop loops through the property of an object. It consists of the variable representing 
 * a key in the object and the object to be interated over, and the code block.
 *          Syntax:     for (var key in object) {
 *                           code block;
 *                      }
 */
// Loops //
/* All loops do the same thing in that they repeat an action some number of times. Each type offers
 * different ways to determine the start and end points of the loop. Depending on the situation,
 * one type of loop my be better to use than the others. All loops will run until a condition is met.
 */
// Examples // 

for (var i = 0; i <= 5; i++) {
    console.log(i);
  
  }
    
/* starts at 0, and loops through until it reaches a value of 5, prints 0, 1, 2, 3, 4, 5
*/

for (var j = 4; i > 0; i--) {
    console.log(i);;
  
  }

                                      
/* Starts at 4, and loops through until it reaches 0, prints 4, 3, 2, 1
*/

// Looping Over An Array //
/* Using a for loop, the .length property can be used as a starting or stopping condition when 
 * looping over an array. 
 */
// 3. Examples //

var myArray = [4, 6, 8, 2, 3];

for (var i = 0; i < myArray.length - 1; i++) {  //prints 4, 6, 8, 2, 3
    console.log(myArray[i]);
}

for (var j = myArray.length; j >= 0; j--) {     // prints 3, 2, 8, 6, 4
    console.log(myArray[i]);
}


// Looping Over an Object //
// You would use the for in loop to loop through an object.  
// Example //

var fullName = {firstName: 'Caron', lastName: 'Garel'};

function name(fullName) {
for (var key in fullName) {
    console.log(fullName(key));     // prints Object: firstName: 'Caron', lastName: Garel
}
} 
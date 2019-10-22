// Operators //
// 1. Assignment Operators //
/* The basic assignment operator is equal (=) which assigns a value to its left operand based on 
 * the value of its right operand.
 */
// Examples //
var x = 5; // assigns the value of 5 to x
console.log(x); // prints 5

x +=  5; // addition assignment, x = x + 5
console.log(x); // prints 10

x -= 5; // subtraction assignment, x = x - 5
console.log(x); // prints 0

x *= 5; // multiplication assignment, x = x * 5
console.log(x); // prints 25

x /= 5; // division assignment, x = x / 5
console.log(x); // prints 1

// 2. Arithmetic Operators //
/* Arithmetric operators are used to perform arithmetic between variables and/or values. Some
 * operators are addition, subtraction, multiplication, division, modulus, increment, and
 *decrement.
*/
// Examples //

var a = b + 2; 
var b = 5;
console.log(a); // addition operator, prints 7

a = b - 2;
console.log(a); // subtraction operator, prints 3

a = b * 2;
console.log(a); // multiplication operator, prints 10

a = b / 2;
console.log(a); // division operator, prints 2.5

a = b % 2;
console.log(a); // modulus operator (division remainder), prints 1

a = b++;
console.log(a); // increment operator, prints 6
 
a = b--; 
console.log(a); // decrement operator, prints 4

// 3. Comparison Operator //
/* Comparison operators are used in logical statemenets. They compare the value on the left 
 * with the value on the right. They are used in conditional statements and evaluates whether
 * a statment is true or false.
 */
// Examples //

var y = 5; 

y === 8; // strictly equal, returns false

y > 8; // greater than, returns false

y < 8; // less than, returns true

y >= 8; // greater than or equal to, returns false

y <= 8; // less than or equal to, returns true

y !== 8; // strictly not equal , returns true

if (y === 5) {
    console.log('The number is 5');
}
    console.log('The number is not 5'); 
 
/* Evaluates if y is strictly equal to 5 and returns a statement depending on whether
 * conditional statement is true or false. Prints The number is 5.
 */ 

// 4. Logical Operators //
/* Logical Operators are  used to determine the logic between variables or values.
 * The 3 logical operators are and &&, or ||, and not !.
 */
// Examples //

var num1 = 2;
var num2 = 7;

if (num1 > 5 && num2 > 5) {
    console.log('Both numbers are greater');
}
    console.log ('Error');
    
 /* The condition above is true if both num1 and num2 are greater than 5, print 'Error'
  */
 
 if (num1 < 5 || num2 < 5) {
     console.log('True');
 }
     console.log('False');
     
 /* The condition above is true if either num1 or num2 is less than 5, prints 'True'
  */
 
 if (!(num1 === num2)) {
     console.log('True');
 } 
     console.log('False');
/* The condition above is true if num1 does not equal num2, prints 'True'
 */

// 5. Unary Operators //
/* A unary operator takes a single argument and performs an operation. The argument
 * comes either before or after the operator.They are more efficient than standard
 * Javascript function calls and they can not be overridden, making their
 * functionality guaranteed.
 *
 * Types:
 * Unary plus (+) - tries to convert the operand into a number
 * Unary negation (-) - tries to convert the operand into a number and negates after
 * Logical not (!) - converts to boolean value than negates it
 * Increment - adds one to its operand
 * Decrement - decrements by one from its operand
 * typeof - returns a string which is the type of an operand
 * delete - deletes specific index of an array or specific property of an object
 * void - discards a return value of an expression
 * bitwise (~) - Inverts all the bits in an operand and returns a number
*/

// Examples //

+3; // returns 3
+'-3'; // returns -3
+true; // returns 1
 
/* The above is examples of unary plus (+). It an convert all string representations,
 * boolean values, and null to numbers. It returns NAN if operand cannot be converted
 * to a number
 */

typeof 2; // returns number
typeof true; // returns boolean
typeof 'Hello'; // returns string
typeof [123]; // returns object

// 6. Ternary Operator //
/* Ternary Operator (?) assigns a value to a variable based on some condition.
 */
// Example //

var age = 30;
var allowEntry = (age >= 18) ? "Enter":"Too Young";
console.log(allowEntry);

/* The above example uses a ternary operator to assign "Enter" to the variable allowEntry
 * if age is greater than or equal to 18; "Too Young" if condition is fale. Prints "Enter
 * The syntax for using a ternary operator is variable = (condition) ? value1:value2
 */




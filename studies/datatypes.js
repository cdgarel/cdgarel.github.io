/*
 * DATA TYPES
 *
 // 1. Number //
 /* A number is a simple data type. It can be any numerical value: positive, negative, or
  * with decimals. Like regular numbers, we can add, subtract, divide, and multiply to create
  * new values with arithmetic expressions. 
 */
 // Example //
 
 var myNum = 4;  // assigns the value of 4 to the variable myNum
 
 myNum = 4 + 3;  // reassigns the value of myNum to 7 by adding the values of 4 and 3
 
 var a = 2;      // assigns the value of 2 to the variable a
 
 var b = a + 2;  // assigns the value of 4 to the variable b
 
// 2. String //
/* A string is a simple data type which consists of a collection of characters surrounded
 * by quotes - either ('' or ""). Individual characters in a string can be accessed with
 * bracket notation. Strings can be combined using the + operator.
 */
 // Example //
 
 var firstName;  // assigns the value of Caron to firstName
 
 var lastName = 'Garel';   // assigns the value of Garel to lastName
 
 var fullName = 'Caron' + 'Garel';
 
 /* assigns the value of Caron Garel to fullName. In the above example fullName can also be 
  * assigned using the other variables above as shown below 
 */  
 fullName = firstName + lastName;   // assigns the value Caron Garel to fullName
 
 // 3. Boolean //
 /* A simple data type that consists of a true or false value. They are typically used in 
  * conditional statements and can be created with boolean exxpressions using conditional
  * operators. When assigning, true or false is written with all lowercase letters.
 */
// Example //

var myBool = true; // assigns the value of true to myBool

myBool = false; // reassigns the value of false to myBool

myBool = 1 === 1; // assigns teh value of true to my Bool by comparing whether 1 is equal to 1

// 4. Array //
/* A complex data type that consists of a collection of dats. Arrays are used to store multiple
 * data types. Every value in an array has an index (the number position of the value in the array).
 * The index starts with starts with 0, the the first value in the list has an index of 0, the second
 * has an index of 1, and so on. Arrays can contain references to any other data type (strings, 
 * numbers, booleans, other arrays, objects, and functions). Arrays allow you to group values togethr
 * so that they can be used as one. 
*/
// Examples //

var myArray = [];

/* the [] are used to create an array. In above example, the array literal is assigned to a
* variable named myArray
*/

myArray = ['a', 'b', 'c'];

/* the array myArray is assigned string values a, b, and c. 'a' is at index 0, 'b' index 1, and
* 'c' 2. Each value/value set is separated by a comma.

// 5. Object // 
/* A complex data type used to store data. It is usually a collection of data relating to a 
 * single object/identity stored in curly braces {}. Objects are similar to arrays, but
 * instead of using indices, values are stored at keys in objects. Objects can contain references
 * to any other data type including strings, numbers, booleans, arrays, objects and functions.
 * Objects contain items that refer to one particular category.
 */

// Example //

var myObject = {};

/* An object is created using the {}. In the ex. above the object literal myObject is assigned 
 * to a variable named myObject.
 */

myObject = {
    key1: 'a',
    key2: 'b',
    key3: 'c'
};

/* Values are assigned to key1, 2, anad 3 in the object myObject. To assign, start with the curly
 * braces, list key followed by colon, and enter key value. The keys are seperated by a comma, and
   the assignment ends with curly braces and a semi-colon. 
*/ 

// 6. Function //
/* Reusable blocks of code that accept inputs, process thoes inputs, and returns a new data value.
 * A function declaration consists of the keyword function followed by the function name, 
 * parameters/arguments, function body (where the code runs), and a return statement. The 
 * code to be executed by the function is placed in curly braces.
 */
// Example //

var a = 1; // assigns a value of 1 to a
var b = 3; // assigns a value of 3 to b

function add(a, b) {
    return a + b;
}

/* calls the function add, with two parameters (a and b), function body returns the value of a + b.
 * returns the value of 4.
*/
// Undefined // 
/* Declaring a variable without assigning it a value will give it a value of undefined. It can also
 * be assigned undefined by using the keyword undefined without quotes; however, it is not 
 * recommended to be used in this way. Undefined is used to check code in order to see if a value
 * was assigned to a variable.
*/ 
// Example //
 var x;
 console.log(x);   // returns "undefined"
 
 var x = 123;
 x = undefined;
 console.log(x);  // returns "undefined"
  
// Example //


// Null // 
// Null represents the intentional absence of a value. It uses teh keyword null without quotes.
// Example //

var age = null;  // states that age is empty, has no value, or value is unknown
console.log(age); // returns null

// NAN //
/* A global property of javascript that represents Not a Number. It indicates that a value is not
 * a number.
 */

// Example //

var pet = 'cat';
var num = pet * 3;
console.log(num);  // returns NAN

// Infinity & -Infinity //
/* A global property in javascript, infinity is a numeric value representing positive Infinity. 
 * -Infinity is a numeric value representing negative infinity.
*/ 
// Example

console.log(1/0); // returns infinity

console.log(-1/0); // returns -infinity

/* Primitive (Simple) & Complex Data Types -
 * 
 * 
 */

// Example //


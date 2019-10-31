// DATA TYPES //

/* Data types are types of data that can be used and manipulated in a program. To be able
 * to operate on variables, it is important to know something about the type. Each data
 * type will be treated differently by JavaScript. The specific data type that you use
 * determines which values you can assign to it and what you can do to it. In the below 
 * sections, we go over the different data types used in JavaScript.
*/

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
 
 var firstName = 'Caron';  // assigns the value of Caron to firstName
 
 var lastName = 'Garel';   // assigns the value of Garel to lastName
 
 var fullName = 'Caron' + 'Garel';
 
 /* assigns the value of Caron Garel to fullName. In the above example fullName can also be 
  * assigned using the other variables above as shown below 
 */  
 fullName = firstName + lastName;   // assigns the value Caron Garel to fullName
 
 console.log(firstName[0]); 
 
 /* uses bracket notation to access the character at index 0 in the firstName
  * variable. Prints 'C' to the console.
 
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
/* A complex data type that consists of a collection of data. Arrays are used to store multiple
 * data types. Every value in an array has an index (the number position of the value in the array).
 * The index starts with 0. The first value in the list has an index of 0, the second
 * has an index of 1, and so on. Arrays can contain references to any other data type (strings, 
 * numbers, booleans, other arrays, objects, and functions). Arrays allow you to group values together
 * so that they can be used as one. The maximum length of an array is bound by a 32 bit integer,
 * aroung 4.3 billion elements. Arrays can hold a huge amount of data all in one place as a 
 * collection.
*/
// Examples //

var myArray = [];

/* the [] are used to create an array. In above example, the array literal is assigned to a
* variable named myArray
*/

myArray = ['a', 'b', 'c'];

/* the array myArray is assigned string values a, b, and c. 'a' is at index 0, 'b' index 1, and
* 'c' 2. Each value/value set is separated by a comma.

console.log(myArray[1]);  // prints 'b', the value in myArray at index 1



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

let myPets = {
    cat: 'meow',
    dog: 'woof'
};

let sound = myPets.dog;
console.log(sound); // prints woof, sound is assigned the value in the myPets object, within key dog. 


// 6. Function //
/* Reusable blocks of code that accept inputs, processes those inputs, and returns a new data value.
 * A function declaration consists of the keyword function followed by the function name, 
 * parameters/arguments, function body (where the code runs), and a return statement. The 
 * code to be executed by the function is placed in curly braces.
 */
// Example //


function add(a, b) {
    console.log(a + b);
}

add(3, 4);


/* calls the function add, with two parameters (a and b), function body returns the value of a + b.
 * returns the value of 7.
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

// Primitive (Simple) & Complex Data Types //
/* Primitive data types are immutable, there is no way to change a value once its created; while
 * complex data tpes are mutable and the value can be changed once created. Primitive data types
 * are compared by copy while complex data types are compared by reference.
 */

// Function by Copy vs by Reference //
/* Primitive values are copied by value, meaning that when we assign these variables to other 
 * variables using (=), we copy the value to the new variable. Each variable is seperate and has
 * its own value since the values were copied. Changing one does not change the other.  
 * Complex data  types are copied by reference. The reference points to the objects location in memory.
 * The variables dont actually contain the value.  
 *  
*/

// Example //

var a = 5;
var b = 6;

function add(b) {
    a = b + 1;
}
 
 console.log(add(b));   // prints 7
 console.log(a); // prints 5, the value of a does not change because of the function - only a copy is taken
 

var myArray = ['Hello', 'Caron!'];

function hello(array) {
    console.log(array[0]);
} 
hello(myArray);      // prints Hello, accesses the array by pointing to the index, it location in memory









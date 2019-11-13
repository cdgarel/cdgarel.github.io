// String Manipulation //

// 1. String Manipulation with Operators //
/* The + and += operator can be used to concatenate (add) strings together.
 */
// Example //
var firstName = 'Caron'; // assigns the value "Caron" to firstName
var lastName = 'Garel'; // assigns the value "Garel to lastName 
var fullName = firstName + " " + lastName; // assigns the value of Caron Garel to firstName

var weather = "The weather is"; 
weather += "nice today";
console.log(weather); // prints The weather is nice today

// 2. String Manipulation with String Methods //
/* Even though a string is a primitive value, string methods and properties are available to use
 * on them because JavaScript treats them like objects when executing methods and properties. Below
 * are some of the methods used.
 *     join method - joins strings together with the option of adding a seperator between the two words
 *     slice method - extracts a part of the string and returns the extracted part in a new string
 *                    uses 2 parameters - start position, end position
 *     toUpperCase() - string is converted to upper case
 *     toLowerCase() - string is converted to lower case
 *     split() - converts string to an array
 *     replace() - replaces a part of a string with another string or expression    
 */

// Examples //

var string = 'My name is Caron';
var newString = string.replace('Caron', 'Janese'); 
console.log(newString);         // prints My name is Ja'nese

var state = 'Mississippi';
console.log(state.toUpperCase()); // prints MISSISSIPPI
console.log(state.toLowerCase()); // prints mississippi
var sliceMethod = state.slice(0, 4);
console.log(sliceMethod); // prints issippi

console.log(state.toUpperCase()); // prints MISSISSIPPI

var letters = "abcde";
console.log(letters.split("")); // prints an array of letters [a, b, c, d, e] 


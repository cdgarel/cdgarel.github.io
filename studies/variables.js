/*
 * VARIABLES:
 *
 * 0. A container for storing values. They provide a way to label and store data. 
 *    Variables are declared using one the keywords (var, let, and const) followed 
 *    by the variable's name. The assignment operator (=) is used to assign a value
 *    to the variable.
 */
  
 // Example: //
 
var myName;

/*
 * The keyword var is used to declare a variable. In the example above, a variable called 
 * myName is being declared.A semicolon is placed at the end of the declaration. The variable 
 * myName is undefined because we have not assigned it to anything. If you were to log the 
 * variable myName to the console, as in the example below, it would return undefined.
 */
console.log(myName); // prints => undefined

// 2. Assignment //
myName = 'Caron';
console.log(myName); // prints => Caron

// The above variable has been assigned a value of 'Caron'.

// 3. re-assignment //
myName = 'Shaka';
console.log(myName); // prints => Shaka

/*
 * In example 3, the variable myName is reassigned a value of Shaka. Variables with the 
 * keyword var can be reassigned. In the myName example, the myName variable was initially
 * assigned a value of Caron; and then, the value was reassigned to Shaka.
 */   
 
 /*     
 * 1. Var, let, const are all keywords used to declare a variable. Both the var and 
 *    keyword signals that the variable can be reassigned a different value. Variables 
 *    created with the const keyword cannot be reassigned because it is constant and 
 *    must be assigned a value when declared.
 */
// Example //
 let myColor = 'red'; 
 console.log(myColor); // prints => red
 
 myColor = 'blue';  //  let variables can be reassigned
 console.log(myColor);  // prints => blue
 
 const myEyes = 'brown'; 
 console.log(myEyes); // prints => brown
 
 // myEyes = 'blue';
//  console.log(myEyes); // TypeError, const variables cannot be changed
 
/*    
 * 2. Its best to use let and const to avoid hoisting. Hoisting (which happens to
 *    variables declared with the var keyword) moves all declarations to the top of the
 *    current scope. Only the declaration gets hoisted, not the actual value.
 */   
  // Example //
myName;
console.log(myName);    // prints => undefined //
var myName = 'Caron';
      
var lastName = 'Garel';
console.log(lastName);    // prints Garel // 

      
function hello(firstName) {
console.log('Hello ' + firstName);  // prints Error
          const firstName = 'Caron'; 
      }
      
       
// Functions //
// 1. Two Phases to Using Functions //
/* The two phases to using a fuction is to declare the function and to call the function. Functions
 * are declared using the keyword function followed by the function name and parameters/arguments. 
 * We call a function by its name, followed by parentheses. Calling a function runs the code in the
 * function body. 
 */
// Example // 

/*eslint-disable semi */
function multiply(a, b) {            // function declaration  
    return a*b;
}
multiply(3, 4);   // function call
console.log(multiply(3, 4)); // returns 12

// 2. Function Parameters/Arguments //
/* Parameters optionally take parameters/arguments. Parameters are just placeholders for 
 * arguments that are later "passed" or given to the function at call time. All parameters are
 * seperated with a comma. 
 */
// Example //

function sum(a, b) {            /* function parameters a and b, placeholders for numbers that will 
    return a + b;                * be entered as arguments in function call.
}                               */    
sum(3,4);                       // function arguments 3, 4 - numbers that will be used to run code.
console.log(sum(3, 4)); // returns 7

// 3. Syntax for a Named Function //
/* One of the benefits of creating a named function is that in case we encounterd an error, the
 * slack trace will contain the name of the function, making it easier to find the origin of the
 * error.
 * Syntax:
 *             function namedFunction() {
 *                          statements;
 *               }
  */
 // Example //
 
function divide(a, b) {           // named function => function given the name divide
    return a/b;
}
divide(8,4);   
console.log(divide(8, 4)); // returns 2
 
 // 4. Assigning Functions to Variables //
 /* A function can be stored inside of a variable. Once stored in a variable, the variable
  * can be used in a function. Functions stored in variables do not need function names. They
  * are always called using the function name.
  */
 // Example //
 
 var c = function (x, y) {return x + y};
 var d = c(6, 9);  
 console.log(d);
 // prints 15
 
 // 5. Specifying Inputs/Outputs //
/* Parameters are used to specify inputs.The return statement inside of the function body
 * determines the function output. A function does not have to include parameters or outputs. 
 */
// Example //

function greeting() {
    console.log('How are you doing today?')
}
greeting();          // prints How are you doing today? 


function add(a, b) {
    
    console.log(a + b);
}
add(3, 4);                     // prints 7                     



// 6. Function Scope //
/* When you define a variable inside of a code block (such as functions) it can only be called
 * inside of that scope. Variables declared inside of the global scope can be accessed in all
 * scopes. Both variable declarations and function declarations are hoisted to the top of their
 * scope. Only the name of the variable is hoisted, while both the name and body of the function
 * gets hoisted. You can call a function declaration anywhere in the scope and it will give output of the
 * function. You cannot call function expressions before a function. Function expressions are 
 * treated like variables; only the name would be hoisted. 
 */
// Example //

function name() {
    var firstName = "Caron";
    console.log(firstName);     
}
 name();      // inside scope, prints Caron
 console.log(firstName)    // outside scope, prints error - firstName is not defined
 
 // Closures //
 /* A function with access to the parent scope, even after the parent function has closed. 
  * Closures use variables from a parent scope. They are useful when returning functions
  * froom functions. They keep variables alive in returned functions. Closures can be used
  * in parameters too. 
  */
 
function displayName() {
    var name= 'Caron Garel'
    function fullName() {
          console.log(name);      
    } fullName();
} 
displayName(name); 

/* fullName is the inner function (closure); its able to grab the variable name from the 
 * parent function.
*/
 

           
           
           
           
          } 
       
// Control Flow //
/* Control flow is the order in which the computer executes statements in a script. Code is run in 
 * order from top to bottom unless the flow is changed by conditionals and loops. This section goes
 * over control flow changed by conditionals. The conditionals discussed are if, if/else, and switch 
 * statements. When reading code, you should read from start to finish (top to bottom) and also look 
 * at the structure to see how it affects execution.
*/


// 1. If Statement //
/* The if statement is used to execute a statement if a logical condition is true. To begin an if
 * statement use the keyword if followed by the condition in parentheses, and then the code block.
 * If the condition is true, the code inside of the code block {} will run. Only one of the
 * statements (code block) will run in an if/else statement determined by whether the condition is true.
 * Once a condition is true, the code block below it will run, and then exit out of the conditional statement.
*/
// 2. Else if //
/* An else if statement is used with the if statement to have multiple conditions tested in sequence.
 * If the initial condition is false, the next conditions will be tested, one after the other
 * until one returns true.
 */
// 3. Else //
/* If none of the conditions return true, the final else statement will be executed. 
 */
// Example //

var x = 10;
if (x === 4) {
    console.log('x is 4');
} else if (x === 9) {
    console.log('x is 9');
} else if (x == 10) {
    console.log('x is 10');
} else {
    console.log('number not found');
}

/* In the above if statement, the 1st condition x === 4 is false, so the next condition is evaluated
 * Statement 2, x === 9 is also false, so the 3rd statement is evaluated. The 3rd statement, 
 * x === 10 is true so the code below it will be executed. Prints x is 10. 
 */

// Switch Statement //
 /* A switch statement is used to perform different different actions based on different conditions.
 * Like the if statement, it reads from top to bottom and executes once a value is true. The
 * switch statement uses the keyword switch followed by an expression in parentheses.The expression
 * is read once. The value of the expression is compared with the value of each case. If there is 
 * a match, the associated block of code is executed. The break keyword breaks out of the switch
 * block once a statement has been executed. If ommitted, the next case will be executed even
 * if the evaluation does not match the case. Switch statements provide a more efficient way to code when
 * testing multiple conditions. The syntax is cleaner rather than using a bunch of if/else statements. You
 * would also use swith over if/else when you have multiple values that may require the same code.
 */
// Example //
var color = 'purple';
switch(color) {
    case 'blue': 
        console.log('Color is blue');
        break;
    case 'yellow':
        console.log('Color is yellow');
        break;
    case 'purple':
        console.log('Color is purple');
        break;
    default:
        console.log('Color not found');
} 

/* The above switch statement evaluates the variable color. It goes through the switch
 * statement until a true condition is reach, in this case color === purple, then returns
 * the code block below it. Prints - color is purple. Once complete, it breaks out of the 
 * switch code.
 */





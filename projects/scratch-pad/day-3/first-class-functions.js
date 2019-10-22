// #!/usr/bin/env node

/*eslint-disable no-else-return */
'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // input base could be a string or number
    // create function that tests whether a given value is greater than the base
    
  return function(num) {
     return num > base;
  };
  
     
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // input base could be a string or number
    // Create a function that test whether a given value is less than the base
    
    return function number(num) {
        return num < base;
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // input: startsWith, a single character
    // Creating a function that tests whether a given string starts with the startsWith character
    
        return function(string) {
              
            if (startsWith.toLowerCase() === string[0].toLowerCase()) {
                return true;
            } else {
                return false;
            }
            
           
        
        
};

    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // Input: one character
    // Creating a function that tests whether a given string ends with the endsWith character
    
    return function(string) {
        if (endsWith.toLowerCase() === string[string.length -1].toLowerCase()) {
            return true;
        } else {
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // Input: An array of strings
    // Creating a function that will return an Array of the Strings modified.
    // Create a loop over the strings that passes each string to modify function and collects the results in an array
    
   var myArray = [];
   
    for (var i = 0; i < strings.length; i++) {
             
             myArray.push(modify(strings[i]));
 
   
}   
     return myArray;

    
    
    // YOUR CODE ABOVE HERE //
} 

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // Given: Array of Strings and a Function
    // Create a loop that tests the string in some way and returns a boolean on whether it passed.
    // Create function that checks if all strings passed.
  var myArray = [];
  
  for (var i = 0; i < strings.length; i++) {
      
     myArray.push(test(strings[i])); 
        
     }
     
    for (var j = 0; j < myArray.length; j++) {
        if (myArray[j] === false) {
            return false;
        } 
    } 
    return true;
     

 

  
   
    
   
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
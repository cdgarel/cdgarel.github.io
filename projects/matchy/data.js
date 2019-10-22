/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create variable called animal and assign it to an empty object 

var animal = {};

// using dot notation, give animal a property named species
// value = any animal species (string)

 animal.species = "dog";

// Using bracket notation, give animal a property called name, value = 
// your animal's name

animal['name'] = "Zola";

// create a property in animal called noises with a value of an empty array

animal.noises = [];

// print animal to console.log

console.log(animal);

// create a variable named noises = empty []

var noises = [];


// Edge - bracket notation
// array element = a string, sound species makes

noises[0] = 'woof';

// Using an array function, add an element at end of array noises

noises.push('meow');

// Use unshift to push element to front of array

noises.unshift('oink');

// Using bracket notation, create another element at the end of array

noises[noises.length] = 'moo';

// console.log the length of noises

console.log(noises.length);

// console.log the entire array

console.log(noises);

// Using bracket notation, assign the noises property on animal to the 
// noises array.

animal['noises'] = noises;

// Add another property to the noises property on animal

noises.push('cluck');

// Create a variable named animals and assign it to an empty array

var animals = [];

// push animal to animals

animals.push(animal);

console.log(animal);

// Create a variable called `duck` and assign it to the data:
// { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
}

// push duck to animals

animals.push(duck);

console.log(animals);

//  Create two more animal objects each with a species, a name, and at least 
//  two sounds sounds and add each one of them to `animals.

var pig = {
    species: 'pig',
    name: 'Pinky',
    noises: ['oink', 'shhh']
};

var cat = {
    species: 'cat',
    name: 'Judah',
    noises: ['meow', 'purr']
};

animals.push(pig);

animals.push(cat);

console.log(animals);
console.log(animals.length);

// create a variable called friends assigned to an array. Array was chosen because that data is a list of items .

var friends = [];

// Write a function called `getRandom` that takes our `animals` array and returns the `index` of a random element
// using `Math.random`

function getRandom(animals) {
    return Math.random(animals);
}










//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}

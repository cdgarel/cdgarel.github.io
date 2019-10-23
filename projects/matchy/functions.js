/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1 param = array (animals)
// 1 param = string (name of animal), will perform a search on Name
// Looks through animals array (loop through) returns animals object 
// if name exists, return animal object, 
// returns null if no animal with that name exists



function search(animals, name) {
    
    for (var i = 0; i < animals.length; i++) {
          if (name === animals[i].name) {
            return animals[i];
        }
        
    } return null;

} 




//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// function called replace
// 3 parameters - an array of animals
//                a name of an animal (will perform search on)
//                an Object that represents the replacement object                        
// if name = animals[i].name, replace the entire object with replacement
// object
// Otherwise, do nothing

function replace(animals, name, replacement) {
  for (var i = 0; i < animals.length; i++) {
    if (name === animals[i].name){
      return animals.splice(animals[i], 1, replacement);
    
  } 
  
} 
   
} 

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// function called remove
// 2 parameters: animals, name
// if name exists, remove

function remove(animals, name) {
    for (var i = 0; i < animals.length - 1; i++) {
        if (name === animals[i].name) {
            return animals.splice(animals[i]);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// function add, 2 param: animals and animal
// if animal object 1. has a name property with a length greater than 0
// 2. has a species property with a length greater than 0
// 3 has a unique name, no other animal has that name
// if conditions above true add to the animals array, 

function add(animals, animal) {
    if (animal.name.length > 0) {
        if (animal.species.length > 0) {
            if (search(animals, animal.name) === null) {
                 animals.push(animal);
            }
        } 
    } 
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
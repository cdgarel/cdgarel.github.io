// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-cdgarel");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
 // Find the number of male customers. Input: Array, Output: Number 
 // Constraints: Use filter
  

   var malesarr =  _.filter(array, function(customerObj, i, array) {
        return customerObj['gender'] === "male";
      
}).length;
   return malesarr;
}


var femaleCount = function(array) {
// Find the number of female customers. Input: Array, Output: Number
// Constraints: Use reduce
      
  var femCount = _.reduce(array, function(accumulator, currVal)  {
           
            if (currVal.gender === "female") {
                accumulator += 1;
           } 
           return accumulator;
   }, 0);
   return femCount;
}


var oldestCustomer = function(array) {
// Find the oldest Customer's name, Input: Array, Output: String
// Create a function that uses the reduce function to loop through object
    var oldest = _.reduce(array, function(acc, currVal) {
        // oldest = age, if oldest > current age, return oldest, else return current
           if (acc.age > currVal.age) {
               return acc;
           } else {
               return currVal;
           }
          
           
    }, {});
        return oldest.name;
}

var youngestCustomer = function(array) {
    // find the youngest customer name, Input: array, Output String
    var youngest = _.reduce(array, function(acc, currVal) {
        // if initial age < current age, return initial, else return current.
        if (acc.age < currVal.age) { 
            return acc;
        } else {
            return currVal; 
        }
    }, {});
            return youngest.name;
}

var averageBalance = function(array){
   // need to convert balances to just a number
   // make seed = 0 to have output of a number
   function pluck(array, prop) {
        return _.map(array, function(e, a, i) {
        return e[prop];
    });

}
var listBal = pluck(array, 'balance');
      //use map to loop through each balance in array
let numArray = _.map(listBal, function(elem){return parseInt(elem.replace(/[^\w\s]/gi, ''), 10)/100});
//console.log(numArray);
//reduce to one value but addition and divide by length
 var count = 0;
   var average = _.reduce(numArray, function(acc, currVal) {
           count++;
           return acc += currVal;
  }, 0)/count;
       return average;
}

var firstLetterCount = function(array, letter) {
// find how many customer names begin with a certain letter
// input: 2, an array and a letter
// output: number
// use reduce function to return a total value for each letter
    var firstLetter = _.reduce(array, function(acc, currVal) {
         if (currVal.name[0].toUpperCase() === letter.toUpperCase()) {
              acc += 1;
         }
            return acc;
    }, 0);
        return firstLetter;

}
var friendFirstLetterCount = function(array, customer, letter) {
// Find how many friends of a given customer have names that start with a given letter
// input: array, letter, output: number
    let customerobj = {};
    for(let i = 0; i < array.length; i++) {
    if(array[i].name === customer){
       customerobj = array[i];
       break;
   }
  }
    var friendFirst =  _.reduce(customerobj.friends, function(acc, currVal) {
   
    if (currVal.name[0].toUpperCase() === letter.toUpperCase()) {
                acc += 1;
            }
        return acc;
       
    }, 0);

        return friendFirst

}
var friendsCount = function(array,custname){
   // find the name of a customer that has a given customers name in their friends list
   //  need to loop into the customers friends array and see if the name key equals given name
   // need an array to push customers name in who are friends with......
let listCust = _.reduce(array, function(previous, current){
let friendsList = _.pluck(current.friends, "name")
if ((_.contains(friendsList, custname)) === true){
previous.push(current.name);
}
      return previous;
}, [])
      return listCust };
      

var topThreeTags = function(array){
   // create an array to hold all tags in
   let arrTags = [];
 let newTags =  _.reduce(array,function(prev,curr,i){
      if(curr.tags !== undefined){
          arrTags.push(curr.tags)
          // flatten the nesetd arrays
      }
       return  [].concat(...arrTags);
 });
 let tags = _.reduce(newTags,function(prev,curr){
           if(prev[curr] === undefined){
               prev[curr] = 1;
           } else {
               prev[curr] += 1;
           } return prev;
},{});
var newArray = [];
_.each(tags,function(count,word,object){
    newArray.push([word,count]);
});
// sort our array highest to lowest
 newArray.sort(function(a,b){
   return b[1] - a[1];
 });

 var final = [];
 for(var i = 0; i < 3; i++){
     final.push(newArray[i][0]);
 } return final;
}

var genderCount = function(array) {
var male = 0;
var female = 0;
var nonBinary = 0;
var summary = {};
var gender = _.reduce(array,function(prev,curr,i){
    if(curr.gender === "male"){
       male+= 1
    } else if(curr.gender === "female"){
       female += 1;
    } else {
        nonBinary+= 1;
    }
},{}); return {
       male,
       female,
       "non-binary": nonBinary
}
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;

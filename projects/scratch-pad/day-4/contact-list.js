// #!/usr/bin/env node

/*eslint-disable no-undef, no-unreachable, no-unused-vars*/
'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
// Creating a function called makeContact that returns a contact object
// makeContact object contains keys id, nameFirst, nameLast

function makeContact(id, nameFirst, nameLast) {
    
var contacts = {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
};

   return contacts;
  }
  
// create an object called contact list
// contact list will contain 4 objects below
// length - a function that returns the number of contacts in object (already done)
// addContact(contact) - create a function that adds a contact object to the contact list
// findContact(fullName) -  create a function that takes a full name string and returns a contact
// object if found in contacts list, returns undefined if no match
// removeContact(contact) - create a function that takes a contact object to be removed from the contact list.

    function makeContactList() {
 /*
  * You need something here to hold contacts. See length api for a hint:
  */
 var contacts = [];
 return {
     // we implemented the length api for you //
     length: function() {
         return contacts.length;
     },
     addContact: function(contact){
      return contacts.push(contact);
     },
     findContact: function(fullName){
         function compareFullNames (contact){
             return (contact.nameFirst + " " + contact.nameLast) === fullName;
         }
         return contacts.find(compareFullNames);
     },
     removeContact: function(contact){
         contacts.splice(contacts.indexOf(contact), contacts.indexOf(contact) + 1);
     },
     printAllContactNames: function(){
         var stringAll = "";
         for (var i = 0; i < contacts.length - 1; i++){
             stringAll += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
         }
         stringAll += contacts[contacts.length -1].nameFirst + " " + contacts[contacts.length - 1].nameLast;
         return stringAll;
     }
 };
}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
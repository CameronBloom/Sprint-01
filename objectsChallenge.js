/*
  Objects are used everywhere in JavaScript. The following problems will help you get a better feel for them.
  
  We want you familiar with the following Object methods:
  .keys(), .values(), .entries(), 
  
  Use documentation and Google if you're stuck!
  - https://developer.mozilla.org/
*/

// use this object for each problem
const student = { name: 'Jonas', age: '12', gender: 'M', role: 'Receiver' };

/* 
  Problem 1:
  - return an array of an Objects properties/keys
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/
console.log(Object.keys(student));


/* 
  Problem 2:
  - return an array of an Objects values
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
*/
console.log(Object.values(student));

/* 
  Problem 3:
  - add a list of characters to Jonas' object; the list should be called 'characters' and it should be an array.
  - example:
  { name: 'Jonas', age: '12', gender: 'M', role: 'Receiver', characters: ['Lily', 'Mother', 'Father', 'Caleb', 'Asher']}
  - after creating the list, iterate over it using a for loop; simply print each name from the character list
*/
student.characters = ['Lily', 'Mother', 'Father', 'Caleb', 'Asher']
console.log(student);

for (let index = 0; index < student.characters.length; index++) {
  console.log(student.characters[index]);
}

/**
 * Stretch
 * - Add a method called greet to the student object to console.log() "My name is Jonas, and I'm a receiver. I'm 12 years old."
 * - This should work for any student's name, age, and role. 
 * - There are multiple ways to do this, but ultimately, running student.greet() should produce the sentence above.
 */

student.greet = function() {
  console.log(`My name is ${this.name}, and I'm a ${this.role.toLowerCase()}. I'm ${this.age} years old.`);
}

student.greet();
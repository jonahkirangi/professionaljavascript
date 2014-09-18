var person = {};
var place = [];
var primative = true;

console.log(person instanceof Object);        // person is an object
console.log(person instanceof Array);         // person is not an array

console.log(place instanceof Array);          // place is an array
console.log(place instanceof Object);         // place is an object
console.log(person instanceof RegExp);        // place is not a RegExp

console.log(primative instanceof Array);      // primative values are not objects

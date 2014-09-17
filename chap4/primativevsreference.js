// Assigning a property to a primative value
var developer = "Jonah";
developer.age = 32;

console.log(developer.age);      // Undefined is returned



// Assigning a property to a reference value
var person = {};
person.name = "Jonah";

console.log("This property can be accessed - " + person.name);

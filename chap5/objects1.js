var person = new Object();          // Using the new operator
person.name = "Tom";
person.age = 99;

console.log(person);



var person = {};                    // Same as new Object()
person.name = "Tom";
person.age = 99;

console.log(person);



var person = {                      // Using object literal notation
  name: "Tom",
  age: 99
};

console.log(person);

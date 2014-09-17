var obj1 = {};
var obj2 = obj1;                    // The value of obj1 has been copied to obj2
obj1.color = "green";               // A new property has been added to obj1

console.log(obj2.color);            // The new property can be accessed from obj2

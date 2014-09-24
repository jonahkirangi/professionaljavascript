var array1 = [];                      // Array literal notation
var array2 = new Array();             // Array constructor
var array3 = new Array(20);           // The array size can be passed in

var array4 = new Array("red", "blue", 99, me = {name: "Jonah", age: 32});


console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

// Add an additional item to array4
array4[5] = "WOW!";
console.log(array4);

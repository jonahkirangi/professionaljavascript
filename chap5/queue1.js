// Create a new array
var beers = [];

// Push two items onto the new array
var count = beers.push("ale", "lager");
console.log("There are " + count + " beers in the array");

// Push an additional item onto the array
var count = beers.push("amber");
console.log("There are now " + count + " beers in the array");

// Use shift() method to retrieve the first item in the array
var item = beers.shift();

console.log("The first beer in the array is an " + item);
console.log(beers);

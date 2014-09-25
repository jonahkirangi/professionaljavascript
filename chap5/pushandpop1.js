// Create an empty array
var trees = [];

// Use push() method to add 3 new items into empty array
var count = trees.push("Fir", "Elm", "Pine");

console.log(trees);
console.log("There are " + count + " total trees");

// Use push() method to add another item into array
var count = trees.push("Oak");

console.log("A bigger list of trees - " + trees);
console.log("There are now " + count + " total trees");

// Use pop() method to remove the last item from array
var lastItem = trees.pop();

console.log(lastItem + " has been removed from the trees array");
console.log(trees);

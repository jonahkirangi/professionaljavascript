// Create new array
var languages = ["English", "Spanish", "French"];

// Use push() method and direct assignment to add new items to array
languages.push("German");
languages[4] = "Italian";

console.log(languages);

// Remove the last item added to the array
var lastItem = languages.pop();

console.log(lastItem + " has been removed from the array");
console.log(languages);

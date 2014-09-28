var planets = ["mars", "earth", "venus", "jupiter"];
console.log(planets);

// Use splice() method to delete items from the array
var planets1 = planets.splice(0,2);
console.log(planets);


var planets = ["mars", "earth", "venus", "jupiter"];

// Use splice() method to insert items into the array
var planets2 = planets.splice(3, 0, "saturn", "mercury");
console.log(planets);


var planets = ["mars", "earth", "venus", "jupiter"];

// Use splice() method to replace and insert items into the array
var planets3 = planets.splice(2, 2, "neptune", "uranus", "mercury");
console.log(planets);

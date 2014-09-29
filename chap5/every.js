var sports = ["football", "baseball", "soccer", "squash"];

// Use the every() method to search for the string "soccer" within the sports array
var sportsResult = sports.every(function(item, index, array) {
  return (item === "soccer");
});

// Every item is not exactly "soccer" so the method returns false
console.log(sportsResult);

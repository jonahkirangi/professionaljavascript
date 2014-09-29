var sports = ["football", "baseball", "soccer", "squash"];

// Use the some() method to search for the string "football" within the sports array
var sportsResult = sports.some(function(item, index, array) {
  return (item === "football");
});

// Since "football" is found in position 0, the some() method returns true
console.log(sportsResult);

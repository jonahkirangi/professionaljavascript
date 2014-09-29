var numbers = [1,2,3,4,5];

// Using the forEach() method runs the function on each item in the array
// There is no return value
var combinedNumbers = numbers.forEach(function(item, index, array) {
  return "This will not be returned";
});

// Undefined will be returned
console.log(combinedNumbers);

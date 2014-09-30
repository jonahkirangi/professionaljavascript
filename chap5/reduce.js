var numbers = [1,2,3,4,5];

// Calculate the sum of each item in the array
var sum = numbers.reduce(function(prev, curr, index, array) {
  return prev + curr;
});

console.log(sum);

var numbers = [1,2,3,4,5,6,7,8,9,10];

// Calculate the sum of each item in the array
// Sum is calculated beginning from the end of the array and moves forward
var sum = numbers.reduceRight(function(prev, current, index, array) {
  return prev + current;
});

console.log(sum);

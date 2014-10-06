function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(3,5));

// New variable declared and set equal to original function
var anotherSum = sum;
console.log(anotherSum(5,6));

// Original function cleared
sum = null;
console.log(sum);

// New variable still functions properly
console.log(anotherSum(10,5));

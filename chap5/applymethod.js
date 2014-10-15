function sum(num1, num2) {
  return num1 + num2;
}

// Pass in the arguments object
function callSum1(num1, num2) {
  return sum.apply(this, arguments);
}

// Pass in an array
function callSum2(num1, num2) {
  return sum.apply(this, [num1, num2]);
}

console.log(callSum1(10, 10));
console.log(callSum2(10, 10));

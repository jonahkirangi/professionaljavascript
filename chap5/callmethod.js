function sum(num1, num2) {
  return num1 + num2;
}

// Arguments are passed directly into function
function callSum(num1, num2) {
  return sum.call(this, num1, num2);
}

console.log(callSum(15, 15));

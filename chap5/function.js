// Function object
function sum1(num1, num2) {
  return num1 + num2;
}

// Function object assigned to a variable
var sum2 = function(num1, num2) {
  return num1 + num2;
};

// Function constructor (not recommended)
var sum3 = new Function("num1", "num2", "return num1 + num2");

console.log(sum1(4,5));
console.log(sum2(3,4));
console.log(sum3(7,8));

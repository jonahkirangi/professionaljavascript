console.log(sum(15,15));

// Function declarations are hoisted to the top of the source tree
// Using a function expression (var sum = ...) will result in an error
function sum(num1, num2) {
  return num1 + num2;
}

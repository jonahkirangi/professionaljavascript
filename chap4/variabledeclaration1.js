function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var result =add (10, 20);           // Pass 10 and 20 into the add function
console.log(result);                // Returns the value 30
console.log(sum);                   // Returns an error as the varibale sum is only available within the add function

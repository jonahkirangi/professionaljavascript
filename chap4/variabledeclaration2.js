function add(num1, num2) {
  sum = num1 + num2;
  return sum;
}

var result = add (10, 20);       // Pass 10 and 20 into the add function
console.log(result);             // Returns the value 30
console.log(sum);                // Returns the value 30 as sum is available outside of the add function

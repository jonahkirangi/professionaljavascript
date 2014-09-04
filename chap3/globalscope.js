function test() {
  message = "hi";             // global variable
  return message;
}

console.log(test());          // returns message
console.log(message);         // returns message

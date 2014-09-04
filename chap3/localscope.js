function test() {
  var message = "hi";         // local variable
  return message;
}

console.log(test());          // returns message
console.log(message);         // error, undefined

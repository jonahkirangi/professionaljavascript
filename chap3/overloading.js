// This first function adds 100 to the argument
function addSomeNumber(num) {
  return (num + 100);
}

// Creating a second function with the same name overwrites the original function and now adds 200 to the argument
function addSomeNumber(num) {
  return (num + 200);
}

console.log(addSomeNumber(100));

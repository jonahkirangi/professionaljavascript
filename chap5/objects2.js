// One argument passed into displayInfo function
function displayInfo(argument) {
  var output = "";

  // An argument of string type
  if (typeof argument.name === "string") {
    output = "Name: " + argument.name + "\n";
  }

  // An argument of number type
  if (typeof argument.age === "number") {
    output = "Age: " + argument.age + "\n";
  }

  return output;
}

// Pass in two arguments, one of each type
var first = displayInfo({
  name: "Jenny",
  age: 22
});

// Pass in one argument, of the string type
var second = displayInfo({
  name: "Eric"
});

console.log(first);
console.log(second);

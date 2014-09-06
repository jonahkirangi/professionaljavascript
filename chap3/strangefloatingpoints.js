var doMath = function() {
  if (a + b === 0.3) {
    return (a + " + " + b + " = " + 0.3);
  } else {
    return (a + " + " + b + " ≠ " + 0.3);
  }
};

// Scenario 1
a = 0.05;
b = 0.25;
console.log(doMath());

// Scenario 2
a = 0.15;
b = 0.15;
console.log(doMath());

// Scenario 3
a = 0.1;
b = 0.2;
console.log(doMath());

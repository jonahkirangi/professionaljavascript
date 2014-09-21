var animal = "dog";

function changeAnimal() {
  var anotherAnimal = "cow";

  function swapAnimals() {
    var tempAnimal = anotherAnimal;
    anotherAnimal = animal;
    animal = tempAnimal;

    return animal;

    // All three variables are available here (tempAnimal, anotherAnimal, and animal)
  }

  // Only anotherAnimal and animal are available here
  swapAnimals();
}

// Only animal is available here

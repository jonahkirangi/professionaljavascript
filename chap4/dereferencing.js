function createState(city) {
  var localState = {};                          // New object created inside function
  localState.city = city;                       // City property added to localState
  return localState;
}

var globalState = createState("Seattle");       // Seattle is passed into createState function and stored in globalState variable
console.log(globalState);

globalState = null;                             // globalState is finally dereferenced
console.log(globalState);

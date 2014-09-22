if (true) {
  var color = "blue";
}

console.log(color);                 // color exists outside of the block



for (var i = 0; i < 10; i++) {
  var j = 0;
  j =+ i;
}

console.log(i);                   // i exists outside of the block

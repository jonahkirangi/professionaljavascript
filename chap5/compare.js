function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}

values = [1,4,9,12,14,22,31,33,39,91];
console.log(values.sort());
console.log(values.sort(compare));

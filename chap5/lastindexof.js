var list = [1,2,3,4,5,6,7,8];

// Since 10 is not in this array, the value -1 will be returned
console.log(list.lastIndexOf(10));

// The search begins from the last position in the array
// Since 2 is in the first position in the array, the number 1 is returned
console.log(list.lastIndexOf(2));

// The search begins from the last position in the array
// Searching for the number 2, but beginning from position 5
console.log(list.lastIndexOf(2, 5));

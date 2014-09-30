// Create today's date
var today = new Date();
console.log(today);

// Create random date
var randomDay = new Date(Date.parse("June 18 2002"));
console.log(randomDay);

// UTC date method
var birthday = new Date(Date.UTC(1982, 3, 14));
console.log(birthday);

// Create the millisecond representation of the current date and time
var now = Date.now();
console.log(now);

var string1 = "Hello World!";
var string2 = string1;                   // The value of string1 has been copied to string2

console.log(string2);

var string1 = "This is only a test";    // The value of string1 has been reassigned

console.log(string1);
console.log(string2);                   // The value of string2 still contains the original "Hello World!" string

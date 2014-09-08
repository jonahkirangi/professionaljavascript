// PREFIX
// Increments and decriments happen BEFORE the statement is evaluated
var num1 = 32;
++num1;
console.log(num1);

var num2 = 100;
--num2;
console.log(num2);

var num3 = 50;
var num4 = ++num3 + 5;
console.log(num4);

// POSTFIX
// Increments and decriments happen AFTER the statement is evaluated
var num5 = 50;
var num6 = num5++ + 5;
console.log(num6);
console.log(num5);

var num7 = 2;
var num8 = 20;

var num9 = num7-- + num8;             // Decriment will occur AFTER the evaluation
console.log(num9);

var num10 = num7 + num8;              // Decriment has been evaluated
console.log(num10);

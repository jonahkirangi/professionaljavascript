console.log(Number(333));                         // Integer is passed through
console.log(Number(000003));                      // Leading zeros are cut off
console.log(Number("333"));                       // Numbers within a string are passed through
console.log(Number(""));                          // An empty string returns zero
console.log(Number("How are you?"));              // Strings have no numeric value - NaN
console.log(Number(true));                        // Booleans return 0 or 1

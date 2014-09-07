console.log(parseInt("1234blue"));                  // asdf
console.log(parseInt(1234));                        // Only numbers are passed through
console.log(parseInt(""));                          // An empty string returns NaN
console.log(parseInt(55.2134234234));               // All characters after . are cut off

// Using radix
console.log(parseInt("100", 2));                    // Binary
console.log(parseInt("100", 8));                    // Octal
console.log(parseInt("100", 10));                   // Decimal
console.log(parseInt("100", 16));                   // Hexadecimal

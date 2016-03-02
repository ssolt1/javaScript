// // your notes here!
// console.log("hello world!");
// console.log("thee are the notes for section 5.");

// var number = 0;

// while (number <= 10) {
//   if (number % 2 === 0) {
//     console.log("the number is even");
//   } else {
//     console.log("the number is odd");
//   }
//   number = number + 1;
// }

// for (number = 0; number <= 10; number++) {
//   if (number % 2 === 0) {
//     console.log("the number is even");
//   } else {
//     console.log("the number is odd");
//   }
//
// }

// print the first 100 integers
// var num;
// for (num = 1; num <= 100; num++) {
//   console.log("the variable is now " + num);
// }

// print all the multiples of 3
// smaller than 100
// var count;
// for (count = 0; count < 100; count++) {
//   if (count % 3 === 0) {
//     console.log("this multiple of 3 is: " + count);
//   }
// }

// alternative way, increment by 3.

// for (count = 3; count <= 100; count = count + 3) {
//  console.log("increment is set to an interval of 3: " + count);
// }

// use loop in a function
// var sumFirstOneHundred = function (number) {
//   var sum = 0;
//   var currentNumber;
//
//   for (currentNumber = 1; currentNumber <= 100; currentNumber = currentNumber + 1) {
//     sum = sum + currentNumber;
//   }
//   return sum;
// };

// var largestDivisor = function (number) {
//   var result = 1;
//
//   var current;
//
//   for (current = 2; current < number; current = current + 1) {
//     if  (number % current === 0) {
//       result = current;
//     }
//   }
//
//   return result;
// };

// looping with strings
// var greeting = "Hello World!";
// var index;
// for (index = 0; index < greeting.length; index = index + 1) {
//   console.log(greeting.charAt(index));
// }

// remove lower case vowles from any string.

// var removeVowels = function (word) {
//   if (typeof word !== "string") {
//     throw "removeVowels function requires a 'string' input.";
//   }
//
//   var result = "";
//   var index;
//   // var currentChar:
//
//   for (index = 0; index < word.length; index = index + 1) {
//     if (word.charAt(index) !== "a" &&
//     word.charAt(index) !== "e" &&
//     word.charAt(index) !== "i" &&
//     word.charAt(index) !== "o" &&
//     word.charAt(index) !== "u") {
//       result = result + word.charAt(index);
//     }
//   }
//
//   return result;
// };

// using variable for repeating code. currentChar is example below.

// var removeVowels = function (word) {
//   if (typeof word !== "string") {
//     throw "removeVowels function requires a 'string' input.";
//   }
//
//   var result = "";
//   var index;
//   var currentChar;
//
//   for (index = 0; index < word.length; index = index + 1) {
//     currentChar = word.charAt(index).toLowerCase();
//     if (currentChar !== "a" &&
//     currentChar !== "e" &&
//     currentChar !== "i" &&
//     currentChar !== "o" &&
//     currentChar !== "u") {
//       result = result + currentChar;
//     }
//   }
//
//   return result;
// };

// firstLowerCaseLetter("")

// var firstLowerCaseLetter = function (tweet) {
//   if (typeof tweet !== "string") {
//     throw "Error: requires a string.";
//   }
//
//   var result = ""; // set to empty string or a not true value.
//   var index;
//
// // modifying the condition to check if anything has changed '&& result === ""',
// // if so, break out of the loop.
//   for (index = 0; index < tweet.length && result === ""; index = index + 1) {
//     if ("a" <= tweet.charAt(index) && tweet.charAt(index) <= "z") {
//       //result = tweet.charAt(index); // or can add return stmt below to break out, this can be harder to troubleshoot or parse later. Modifying the continuation condition is easiest to debug.
//       return tweet.charAt(index);
//     }
//   }
//
//   return result;
// };

// // count backwards, like from 10 to 0.
// var countDown = function (number) {
//   if (typeof number !== "number") {
//     throw "Error: number input reqired.";
//   }
//
//   var current;
//   for (current = number; current >= 0; current = current - 1) {
//     console.log(current);
//   }
// };

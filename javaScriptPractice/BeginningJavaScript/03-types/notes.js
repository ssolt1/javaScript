// your notes here!
console.log("hello world!");
console.log("This is section 03-types!");
// convert celsius to fahrenheit
// fahrenheit value times 9, divide result by 5, then add 32
//((fvalue * 9) / 5) + 32
//((0 * 9) / 5) + 32

// expression that calculates the total price of a burrito and rounds
// the result to the nearest dollar.
Math.round(5.99 * .09 + 5.99);

// write and expression tht prints out the last 3 letters
// of a string in all uppperCase.
var testStr = "In the beginning, there were hot lumps.";
console.log(testStr.slice(testStr.length - 3, testStr.length).toUpperCase());
//PS.

testStr.slice(testStr.length - 3, testStr.length).toUpperCase();
// output: "PS."

// instructors selection
tweet
"hello this is a tweet lol";
tweet.slice(tweet.length - 3);
//"lol" // <= output
tweet.slice(tweet.length - 3).toUpperCase();
//"LOL" // <= output

// expression returns true if a string is a tweet (no more than 140 characters), and returns false otherwise.
tweet.length <= 140;
true

// expression that returns true if the string is a tweet (no more than 140 characters) and it contains "lol" in it.
tweet.length <= 140 && tweet.slice(tweet.indexOf("lol"), tweet.indexOf("lol") + 3) === "lol";
true

// instructors solution
tweet.length <= 140 && tweet.indexOf("lol") > -1;

// instructor example to test that the variable is a number
var isNumber = function (potentialNumber) {
    return typeof potentialNumber === "number";
};

// instructor example to test if variable is positive number.
var isPostitiveNumber = function (number) {
   return typeof number === "number" && number > 0;
};

// repeating code from above, so insert in isNumber(number) function at the beginning, replacing 'typeof number === "number"'
var isPostitiveNumber = function (number) {
   return isNumber(number) && number > 0;
};

// continuing to build more complicated functions by building on or incorporating previously created functions.
// instructor year example incorporating the last function.
var isYear = function (potentialYear) {
   return isPositiveNumber(potentialYear) && potentialYear <= 9999;
};




























// your notes here!
console.log("hello world!");
console.log("these are my notes for section 4");

// getTagName("<p>");
// => p

// getTagName("</p>");
// => p

//getTagName("<article>");
// => article

//getTagName("</article>");
// => article

var getTagName = function (tag) {
  var result;
  if (tag.charAt(1) !== "/") {
    result = tag.slice(1, tag.length - 1);
  } else {
    result = tag.slice(2, tag.length - 1);
  }
  return result;
};

var improveTweet = function (tweet) {
  var result = tweet;
  if  (tweet.toLowerCase().indexOf("lol") === -1) {
    result = tweet + " lol";
  }
  return result;
};

var whatTime = function (number) {
  var result;
  if (0 < number && number <= 6) {
    result = "the number is between 0 and 6 inclusive."; // "Wow, it's early!" 0 > 5
  } else if (6 < number && number <= 12) {
    result = "the number is between 6 and 12 inclusive."; // "Good Morning!" 5 > 12
  } else if (12 < number && number <= 18) {
    result = "the number is between 12 and 18 inclusive."; // "Good Afternoon!" 12 > 17
  } else if (18 < number && number <= 24) {
    result = "the number is between 18 and 24 inclusive."; // "Good Evening!" 17 > 20
  } else {
    result = "this number is out of range...";
  }
  return result;
};
// instr has one more range, 20 > 24, "Shouldn't you be in bed?"

/* write if-else-if stmt that prints "awesome" if a tweet contains at least 100
characters, "sorta-good" if the tweet contains between 50 and 100 characters,
and "not great" if the tweet contains less than 50 characters. */

var tweetQual = function (tweet) {
  var result;
  if (tweet.length >= 100 && tweet.length <= 140) {
    result = "awesome";
  } else if (tweet.length >=50 && tweet.length < 100) {
    result = "sorta-good";
  } else if (tweet.length > 0 && tweet.length < 50) {
    result = "not great";
  } else {
    result = "too big to be a tweet.";
  }
  return result;
};

// max of three
var maxOfThree = function (a, b, c) {
  var result;

  if (a > b) {
      // a is bigger that b
      if (a > c) {
        // a is bigger than c
        result = a;
      } else {
        // c is bigger than a
        // and c is bigger that b
        result = c;
      }
  } else {
      if (b > c) {
        result = b;
      } else {
        result = c;
      }
  }
  return result;
};

// instr simplification of the above nested if stmts.
// impressive 22 to 12 lines and a lot less complexity!

var maxOfThreeBetter = function (a, b, c) {
  var result;

  if (a > b && a > c) {
    result = a;
  } else if (b > a && b > c) {
    result = b;
  } else {
    result = c;
  }

  return result;
};

// remember that nested if-else statm can be translated into && || !...

// isNumber function
var isNumber = function (value) {
  return typeof value === "number";
};

// throw stmt
var addThreeThro = function (a, b, c) {
  if (!isNumber(a) || !isNumber(b) || !isNumber(c)) {
    throw "ALL INPUTS TO ADDTHREETHRO MUST BE NUMBERS!!!";
  }

  return a + b + c;
};


/* scratch area for 10 practice questions.

*/

var isString = function (value) {
  return typeof value === "string";
};

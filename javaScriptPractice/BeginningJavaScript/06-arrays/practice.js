// 0. At first glance, extracting a character from a string using the square
// brackets array notation, and using the `charAt` method probably seem to do the
// same thing. However, they've got a few important differences. What happens when
// you access an element outside the length of the string with `charAt`? =>
// chars.charAt(14);
// ""

// What happens when you do the same thing with the square brackets? =>
// chars[14];
// undefined

// var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var chars = ("0123456789");

// 1. You can _mutate_ an the value at an index in an array by using the square brackets.
// Does the same thing work with a string? Nope.
// Why might that be?
//

// Write a function called `containsTwice` that accepts a number and an array,
// and returns `true` if that number appears in the array twice, and `false`
// otherwise.
//
//     containsTwice(5, [1, 2, 3, 4, 5]);
//     //=> false
//
//     containsTwice("hello", [ "hello", "world", "hello" ]);
//     //=> true
//
//     containsTwice(true, [ true, false, false, true ]);
//     //=> true
//
//     containsTwice(10, [10, 10, 10, 10, 10]);
//     //=> false
//
var containsTwice = function (value, list) {
   var result = 0;
   var index;

   for (index = 0; index < list.length; index = index + 1) {
      if (list[index] === value) {
         result = result + 1;
      }
   }
   return result === 2;
};


// Generalize the previous solution into a function called `containsNTimes` so
// that it can check for a value an arbitrary number of times.
//
//     containsNTimes(3, "hello", [ "hello", "hello", "hello" ]);
//     //=> true
//
//     containsNTimes(5, true, [ true, true, true, true, false ]);
//     //=> false
//
//     containsNTimes(0, 5, [ 1, 2, 3, 4, 5 ]);
//     //=> false
//
var containsNTimes = function (n, value, list) {
   var result = 0;
   var index;
   for (index = 0; index < list.length; index = index + 1) {
      if (list[index] === value) {
         result = result + 1;
      }
   }
   return result === n;
};

// Write a function called `atLeastOneEven` that returns `true` if at least one of
// the numbers in input array is even, false otherwise. It should throw an error if
// the argument is not an array.
//
//     atLeastOneEven([ 3, 5, 6, 7, 9 ]);
//     //=> true
//
//     atLeastOneEven([]);
//     //=> false
//
//     atLeastOneEven([ 101, 203, 401 ]);
//     //=> false
//
//     atLeastOneEven("hello");
//     //=> input should be an array!
//
var atLeastOneEven = function (list) {
   if (Array.isArray(list) !== true) {
      throw "Error: Input should be an array!";
   }
   var result = 0;
   var index;

   for (index = 0; index < list.length; index = index + 1) {
      if (list[index] % 2 === 0) {
         result = result + 1;
      }
   }
   return result >= 1;
};


// Write a function called `allStrings` that accepts an array as an argument and
// returns `true` if all of the values in the array are strings. It should
// return false if they are not all strings, and throw an error if the input is
// not an array.
//
//     allStrings([ "these", "are", "all", "strings" ]); //=> true
//
//     allStrings([ "these", "are", "not", 5 ]); //=> false
//
//     allStrings([ ]); //=> true
//
//     allStrings("hello"); //=> input should be an array!
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds a non-string entry in the array.
//
var allStrings = function (list) {
   if (Array.isArray(list) !== true) {
      throw "Error: Input should be an array!";
   }
   var index;

   for (index = 0; index < list.length; index = index + 1) {
      if (typeof list[index] !== "string") {
         return false;
      }
   }
   return true;
};

// instructors solution adds '&& result === true' to the continuation condition in the for loop.
// also, in the if statement, reused the 'isString' function created in an earlier section.
// I added the reused functiions at the end of this file.
// var allStrings = function (list) {
//     if (!Array.isArray(list)) {
//         throw "input should be an array!";
//     }
//
//     var result = true;
//     var i;
//
//     for (i = 0; i < list.length && result === true; i = i + 1) {
//         if (!isString(list[i])) {
//             result = false;
//         }
//     }
//
//     return result;
// };

// Write a function that accepts two arrays, and returns true if any of the
// values in the first array appear twice in the second array. You might want to
// reuse the function `containsNTimes` or `containsTwice` from above. It should
// throw an error if either of the inputs are not arrays.
//
//
//     containsAnyTwice([1, 2], ["hello", 1, "world", 1]);
//     //=> true
//
//     containsAnyTwice([], ["always", "will", "return", "false"]);
//     //=> false
//
//     containsAnyTwice(["hello", "world"], ["hello", "hello", "world", "world"]);
//     //=> true
//
//     containsAnyTwice("hello", ["hello", "world"]);
//     //=> containsAnyTwice expects two arguments, both of which should be an array.
//
// Although the tests will not be checking for this, try to make your loop exit
// as soon as it finds an element in the first array that appears twice in the second
// array.
//
var containsAnyTwice = function (values, list) {
   if (!Array.isArray(values) || !Array.isArray(list)) {
      throw "Error: Input should be two array's!";
   }
   var result = false;
   var index;

   for (index = 0; index < list.length && result === false; index = index + 1) {
      if (containsTwice(values[index], list)) {
         result = true;
      }
   }
   return result;
};

// In the previous problem, we determined whether or not an array contains any
// of a list of values exactly twice. In this problem, we'll actually return
// those values appearing twice.  Create a new function that returns an array of
// only the values from the first array that appear twice in the second array.
//
// For this problem, you'll create a new array, and you'll use its `push`
// function to add elements to the end. You'll most likely want to use the
// `containsTwice` function you created in the previous exercise.
//
// The difficulty here will be in avoiding duplicates. You may want to use the
// `indexOf` method of the resulting array to confirm that you're not adding a
// value a second time.
//
//     getValuesAppearingTwice(["hello", 1, "world", 1]);
//     //=> [ 1 ]
//
//     getValuesAppearingTwice(["always", "will", "return", "empty"]);
//     //=> []
//
//     getValuesAppearingTwice(["hello", "hello", "world", "world", "goodbye"]);
//     //=> [ "hello", "world" ]
//
//     getValuesAppearingTwice(["hello", "world", "goodbye"])
//     //=> []
//
var getValuesAppearingTwice = function (list) {
   var result = [];
   var index;

   for (index = 0; index < list.length; index = index + 1) {
      if (containsTwice(list[index], list) && result.indexOf(list[index]) === -1) {
         result.push(list[index]);
      }
   }
   return result;
};

// I don't understand how to avoid the duplicates above, I finally consulted the solution,
// but I'm still having difficulty with the second (avoid dups) part of the if condition
// '&& result.indexOf(list[index]) === -1)'
// I will need to revisit this again or contact Semmy.

// Using a standard `for` loop, along with the `push` function, write a function
// called `range` that accepts two numbers, `begin` and `end`, and returns an array
// that contains all of the integers starting at `begin` and ending at `end`
// (including `begin` and `end`). For example:
//
//     range(5,10);
//     //=> [5, 6, 7, 8, 9, 10]
//
//     range(0,3);
//     //=> [0, 1, 2, 3]
//
//     range(10,3);
//     //=> [10, 9, 8, 7, 6, 5, 4, 3]
//
// It should throw an error when either of the arguments are not numbers.
//
//     range("hello", "world");
//     //=> arguments to range must be numbers
//
var range = function (a, b) {
   if (typeof a !== "number" || typeof b !== "number") {
      throw "Error: Arguments to range must be numbers."
   }
   var result = [];
   var index;
   var inc;

   // how to handle direction if a is larger than b.
   if (a <= b) {
      inc = 1;
   } else {
      inc = -1;
   }

   for (index = a; index !== b; index = index + inc) {
      result.push(index);
   }
   result.push(b);
   return result;
};

// Using the `isHTMLElement` and `getTagName` function from one of the previous
// sections, write a function called `mapToTags` that accepts an array of HTML
// elements and returns a new array that consists of only the tags associated with
// those HTML elements. It should throw an error if any of the elements are not
// HTML elements, or if the input is not an array.
//
//     mapToTags(["<p>this is a paragraph</p>", "<span>this is a span</span>", "<li>this is a list item</li>"]);
//     //=> ["p", "span", "li"]
//
//     mapToTags([]);
//     //=> []
//
//     mapToTags(["<p>this is a paragraph</p>", "this is a tweet"]);
//     //=> "this is a tweet" is not an HTML element!
//
//     mapToTags(5);
//     //=> wat?
//
//     mapToTags([ "not an html element" ]);
//     //=> all entries must be html elements!
//
// var mapToTags = function () {
// };
var mapToTags = function (htmlEl) {
    if (!Array.isArray(htmlEl)) {
        throw "Error: Args need to be an array.";
    }

    var tags = [];
    var index;

    for (index = 0; index < htmlEl.length; index = index + 1) {
        if (!isHTMLElement(htmlEl[index])) {
            throw "'" + htmlEl[index] + "' is not an HTML Element";
        }
        tags.push(getTagName(htmlEl[index]));
    }

    return tags;
};

// Write a function called `filterToLol` which accepts an array of tweets and
// returns an array that consists only of those that contain `lol` (upper, lower,
// or mixed-case). It should throw an error if the input is not an array or if any
// of the elements are not strings.
//
//     filterToLol(["hello world!", "this is a tweet lol", "this is a tweet omg"]);
//     //=> ["this is a tweet lol"]
//
//     filterToLol(["lol", "LOL", "LoL", "omg", "lollerskates"]);
//     //=> ["lol", "LOL", "LoL", "lollerskates"]
//
//     filterToLol(["omg", "this is a tweet"]);
//     //=> []
//
//     filterToLol(5);
//     //=> no can do.
//
//     filterToLol(["this is a string", false, 5]);
//     //=> all entries must be strings!
//
var filterToLol = function (list) {
   if (!Array.isArray(list) && !allStrings(list)) {
      throw "Error: Requires string arguments and must be an array."
   }

   var result = [];
   var index;

   for (index = 0; index < list.length; index = index + 1) {
      if (list[index].toLowerCase().indexOf("lol") > -1) {
         result.push(list[index]);
      }
   }
   return result;
};

// helper functions that are used throughout
var isString = function (val) {
    return typeof val === "string";
};

var isHTMLElement = function (str) {
    var openTag = str.substring(str.indexOf("<") + 1, str.indexOf(">"));
    var closeTag = str.substring(str.lastIndexOf("</") + 2, str.lastIndexOf(">"));
    return str.charAt(0) === "<" && str.charAt(str.length - 1) === ">" && openTag === closeTag;
};

var getTagName = function (elt) {
    if (!isHTMLElement(elt)) {
        throw "Error: Not an HTML Element!";
    }

    return elt.slice(1, elt.indexOf(">"));
};

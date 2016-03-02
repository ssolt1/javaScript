// your notes here!
console.log("hello world!");
console.log("This is another statement");

// create function called toCardString that accepts rank and suit of card, then prints out like:
//=> ace of spades

var toCardString = function (rank, suit) {
   var cardDef = rank + " of " + suit;
   return cardDef;
};

var twoDia = toCardString("two", "diamonds");
var queHea = toCardString("queen", "hearts");

console.log(twoDia);
console.log(queHea);

// or
console.log(toCardString("two", "diamonds"));
console.log(toCardString("queen", "hearts"));

var makeHtmlElement = function(tag, content) {
   var line = "<" + tag + ">" + content + "</" + tag + ">";
   return line;
}

var makeHtmlElement = function(tag, content) {console.log("<" + tag + ">" + content + "</" + tag + ">");}


// teachers version

var makeHtmlParagraph = function (content) {
   var openParagraphTag = "<p>";
   var closeParagraphTag + "</p>";
   var htmlParagraph = openParagraphTag + content + closeParagraphTag;
   return htmlParagraph;
};



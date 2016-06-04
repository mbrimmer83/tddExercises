/*

Write your implementation code in here.

*/

function hello(person) {
  if (person) {
    return "Hello, " + person + "!";
  } else {
      return ("Hello!");
  }
}

function echo (str) {
  return str;
}

function shout (multi) {
  if (multi) {
    return  multi.toUpperCase();
  } else {
  return "HELLO";
}
}

function repeat (str, times) {
  if (!times) {
    times = 2;
  }
  var ret = str;
  for (var i = 1; i < times; i++) {
    ret = ret + ' ' + str;
  }
  return ret;
}

function start_of_word (let, times) {
  var word = '';
  for (var i = 0; i < times; i++) {
    var str = let.charAt(i);
    word = word + str;
  }
  return word;
}

function first_word (word) {
  var firstWord = word.split (" ");
  return firstWord[0];
}

function f2c (tempF) {
  var tempC = ((tempF - 32) * (5/9));
  return tempC;
}

function c2f (tempC) {
  var tempF = tempC * (9/5) + 32;
  return tempF;
}

// function repeat (word, times) {
//   for (var i = 0; i < times; i++) {
//     var repeatWord = repeatWord + word;
//   }
//   return repeatWord;
// }

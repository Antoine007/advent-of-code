var fs = require('fs');
var input = fs.readFileSync('day5.txt').toString()
var allstrings = input.split("\n");

function killTheNaughty(allstrings){
  niceStrings = [];
  for(var i = 0; i < (allstrings.length - 1); i++){
    var nice =true
    thestring = allstrings[i]

    if (doubleLetter(thestring) !== true){
      nice = false
    }
    if(countVowels(thestring) < 3){
      nice = false
    }
    if(thestring.match(/ab|cd|pq|xy/)){
      nice = false
    }
    // for (var j = 0; j < thestring; j++){

    // }
    if(nice==true){
      niceStrings.push(thestring)
    }
  }
  return niceStrings
};

function doubleLetter(thestring){
  var result = false;
  for(var j=0; j < (thestring.length - 1); j++){
    if (thestring.substr(j,1) == thestring.substr(j+1,1)){
      j = thestring.length;
      result = true;
    }
  }
  return result;
};


function countVowels(string){
  var m = string.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
};

console.log(killTheNaughty(allstrings).length)

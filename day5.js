var fs = require('fs');
var input = fs.readFileSync('day5.txt').toString()
var allstrings = input.split("\n");

function killTheNaughty(allstrings){
  niceStrings = [];
  for(var i = 0; i < (allstrings.length - 1); i++){
    thestring = allstrings[i]
    if(doubleLetter(thestring) !== true) continue;
    if(countVowels(thestring) < 3)       continue;
    if(thestring.match(/ab|cd|pq|xy/))   continue;
    niceStrings.push(thestring);
  }
  return niceStrings
};

function doubleLetter(thestring){
  for(var j=0; j < (thestring.length - 1); j++){
    if (thestring.substr(j,1) == thestring.substr(j+1,1)){
      var result = true;
      break
    }
  }
  return result || false;
};

function countVowels(string){
  v = string.match(/[aeiou]/gi);
  return v === null ? 0 : v.length;
};

console.log(killTheNaughty(allstrings).length)

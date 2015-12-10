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

function doubleLetter(string){
  for(var j=0; j < (string.length - 1); j++){
    if (string.substr(j,1) == string.substr(j+1,1)) return true;
  }
};

function countVowels(string){
  v = string.match(/[aeiou]/gi);
  return v === null ? 0 : v.length;
};

// console.log(killTheNaughty(allstrings).length)

//part2
function twoPairs(string){
  twoletters = [];
  for(var j=0; j < (string.length - 1); j++){
    twoletters.push(string.substr(j,1)+string.substr(j+1,1));
  }
  for(var k=0; k < twoletters.length ; k++){
    for(var i=k+1; i < twoletters.length ; i++){
      if(twoletters[k]==twoletters[i] && i!==k+1) return true;
    }
  }
};

function aBa(string){
  for(var j=0; j < (string.length - 1); j++){
    if (string.substr(j,1) == string.substr(j+2,1)) return true;
  }
};

function killTheSuperNaughty(allstrings){
  niceStrings = [];
  for(var i = 0; i < (allstrings.length - 1); i++){
    thestring = allstrings[i]
    if(twoPairs(thestring) !== true) continue;
    if(aBa(thestring) !== true)      continue;
    niceStrings.push(thestring);
  }
  return niceStrings
};

console.log(killTheSuperNaughty(allstrings).length)

var fs = require('fs');
var allstrings = fs.readFileSync('day8.txt').toString().split("\n");

var totalLength = allstrings.join("").length;


function iterate(allstrings){
  result = [];
  for(var i = 0; i < (allstrings.length-1); i++) {
    var raw_string = allstrings[i].match(/"(.+)"/)
    string = raw_string[1]
    string = string.replace(/\\\\|\\"|\\x[a-f0-9]{2}/g, 'X')
    result.push(string);
  }
  return result.join("").length
}

function iterateTwo(allstrings){
  result = [];
  for(var i = 0; i < (allstrings.length-1); i++) {
    string = allstrings[i].replace(/\\|"/g, 'YY') + 'aa'
    result.push(string);
  }
  return result.join("").length
}

console.log(totalLength)
console.log(totalLength - iterate(allstrings))
console.log(iterateTwo(allstrings) - totalLength)

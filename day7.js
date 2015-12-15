var fs = require('fs');
var input = fs.readFileSync('day7.txt').toString()
var allstrings = input.split("\n");

// console.log(allstrings)
var letters = 'af';

var value = Convert.ToInt16(letter);

console.log(value)
// var parsed = string.match(/(.*) (\d+),(\d+) through (\d+),(\d+)/);

// function instructions(string){
//   instruction = string.match(/[a-z]$/)[0]
//   x = string.match(/(\d+)/)[1]
//   y = string.match(/[a-z0-9],(\d+)/)[1]
//   p = string.match(/([0-9]+),[0-9]+$/)[1]
//   q = string.match(/[0-9]+$/)[0]
//   return [instruction,x,y,p,q]
// }


// function() {
//   for(var i = 0; i < (allstrings.length-1); i++) {
//     OnOffSwitch(instructions(allstrings[i]))
//   }

// }

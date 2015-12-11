var fs = require('fs');
var input = fs.readFileSync('day7.txt').toString()
var allstrings = input.split("\n");

console.log(allstrings)


function instructions(string){
  instruction = string.match(/[a-z]$/)[0]
  x = string.match(/(\d+)/)[1]
  y = string.match(/[a-z0-9],(\d+)/)[1]
  p = string.match(/([0-9]+),[0-9]+$/)[1]
  q = string.match(/[0-9]+$/)[0]
  return [instruction,x,y,p,q]
}

var fs = require('fs');

var result = 0

function floorCalculator(input){

  for(var i =0; i < input.length; i++){
    if (input[i] === "("){
      result = result+1
    }
    if(input[i] === ")"){
      result = result-1
    }
  }
  return result
};

// console.log(floorCalculator("((("))
var text = fs.readFileSync('day1.txt').toString()
console.log(floorCalculator(text))

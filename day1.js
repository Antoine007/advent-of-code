var fs = require('fs');
var text = fs.readFileSync('day1.txt').toString()


function floorCalculator(input){
  var result = 0
  for(var i =0; i < input.length; i++){
    if(input[i] === "(") result++;
    if(input[i] === ")") result--;
    if(result == -1) console.log(i+1); // for the second part
  }
  return result
};

// console.log(floorCalculator("((("))
console.log(floorCalculator(text))

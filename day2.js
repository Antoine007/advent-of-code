var fs = require('fs');
var input = fs.readFileSync('day2.txt').toString()
var parcels = input.split("\n");

function neededPaper(l,w,h){
  side1 = 2*l*w
  side2 = 2*w*h
  side3 = 2*h*l
  min = Math.min(side1,side2,side3) / 2
  return  side1 + side2 + side3 + min
};
// console.log(neededPaper(3,11,24))

function totalPaper(parcels){
  var result =0
  for(var i = 0; i < (parcels.length -1); i++) {
      // console.log(parcels[i])
      l = parcels[i].match(/\d+/)[0]
      w = parcels[i].match(/\d+x(\d+)/)[1]
      h = parcels[i].match(/\d+x\d+x(\d+)/)[1]
      result = result + neededPaper(l,w,h)
      // console.log(result)
  }
  return result
};

console.log(totalPaper(parcels))



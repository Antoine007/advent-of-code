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

function neededRibbon(l,w,h){
  l = parseInt(l, 10);
  w = parseInt(w, 10);
  h = parseInt(h, 10);
  max = Math.max(l,w,h);
  wrap = l+l+w+w+h+h-max-max;
  bow = l*w*h;
  return  wrap + bow
};

function totalPaper(parcels){
  var paper = 0;
  var ribbon = 0;
  for(var i = 0; i < (parcels.length -1); i++) {
      l = parcels[i].match(/\d+/)[0]
      w = parcels[i].match(/\d+x(\d+)/)[1]
      h = parcels[i].match(/\d+x\d+x(\d+)/)[1]
      paper += neededPaper(l,w,h);
      ribbon += neededRibbon(l,w,h);
  }
  return [paper,ribbon]
};

console.log(totalPaper(parcels))



var fs = require('fs');
var input = fs.readFileSync('day6.txt').toString()
var allstrings = input.split("\n");
// console.log(allstrings)

var express = require('express');
var app     = express();

function gridMaker(){
  grid = [];
  for(var i = 0; i < 1000; i++) {
    line = [];
    for(var j = 0; j < 1000; j++) {
      line.push(0);
    }
    grid.push(line);
  }
  return grid;
}
gridMaker();

function gridIterator(x,y,p,q,to_do){
  for(var i = y; i <= q; i++) {
    for(var j = x; j <= p; j++) {
      if(to_do==1){
        grid[i][j]=1;
      }else if(to_do==0){
        grid[i][j]=0;
      }else if(to_do=="switch"){

        if(grid[i][j]==0){
          grid[i][j]=1;
        }else{
          grid[i][j]=0;
        }

      }else{
        console.log('error')
      }
    }
  }
  return grid;
}

function gridIteratorTwo(x,y,p,q,to_do){
  for(var i = y; i <= q; i++) {
    for(var j = x; j <= p; j++) {
      if(to_do==1){
        grid[i][j]+=1;
      }else if(to_do==0){
        if(grid[i][j] > 0 ) grid[i][j]-=1;
      }else if(to_do=="switch"){
        grid[i][j]+=2;
      }else{
        console.log('error')
      }
    }
  }
  return grid;
}

function instructions(string){
  var parsed = string.match(/(.*) (\d+),(\d+) through (\d+),(\d+)/);
  instruction = parsed[1]
  x = Math.min(parsed[2],parsed[4])
  y = Math.min(parsed[3],parsed[5])
  p = Math.max(parsed[2],parsed[4])
  q = Math.max(parsed[3],parsed[5])
  return [instruction,x,y,p,q]
}

function OnOffSwitch(instructions){
  if(instructions[0] == "toggle"){
    gridIteratorTwo(instructions[1],instructions[2],instructions[3],instructions[4],"switch") //add or remove Two according to part of the problem
  } else if(instructions[0] == "turn off"){
    gridIteratorTwo(instructions[1],instructions[2],instructions[3],instructions[4],0)
  } else if(instructions[0] == "turn on"){
    gridIteratorTwo(instructions[1],instructions[2],instructions[3],instructions[4],1)
  } else{console.log('error1')}
  return grid;
}

function lightShow(allstrings){
  console.log(allstrings[allstrings.length -2])
  for(var i = 0; i < (allstrings.length-1); i++) {
    OnOffSwitch(instructions(allstrings[i]))
  }
  return grid;
}

function countOnes(){
  // lightShow(["turn on 998,998 through 999,999","toggle 998,998 through 999,999","toggle 998,998 through 999,999", "turn off 0,0 through 999,999", "toggle 0,999 through 999,999", ""]);
  lightShow(allstrings);

  result = 0;
  for(var i = 0; i < 1000; i++) {
    for(var j = 0; j < 1000; j++) {
      // if(grid[i][j]===1) result+=1;          // Switch accoding to part of the problem
      result += grid[i][j]
    }
  }
  return result;

}

console.log(countOnes())

// http://codepen.io/anon/pen/OMyrjr   Data visualization

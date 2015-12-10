var fs = require('fs');
var input = fs.readFileSync('day6.txt').toString()
var allstrings = input.split("\n");

// console.log(allstrings)

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
// console.log(grid)

function gridIterator(x,y,p,q,to_do){
  // if (y>q) console.log("error",y,q,"y");
  // if(x>p)console.log("error", x,p,"x" );
  for(var i = y; i <= q; i++) {
    for(var j = x; j <= p; j++) {
      if(to_do==1){
        // console.log("On")
        grid[i][j]=1;
      }else if(to_do==0){
        // console.log("Off")
        grid[i][j]=0;
      }else if(to_do=="switch"){

        if(grid[i][j]==0){
          // console.log("ToggleOn")
          grid[i][j]=1;
        }else{
          // console.log("ToggleOff")
          grid[i][j]=0;
        }

      }else{
        console.log('error')
      }
    }
  }
  return grid;
}

function instructions(string){
  instruction = string.match(/^[ a-z]+/)[0]
  x = string.match(/(\d+)/)[1]
  y = string.match(/[a-z0-9],(\d+)/)[1]
  p = string.match(/([0-9]+),[0-9]+$/)[1]
  q = string.match(/[0-9]+$/)[0]
  return [instruction,x,y,p,q]
}

function OnOffSwitch(instructions){
  if(instructions[0] == "toggle "){
    gridIterator(instructions[1],instructions[2],instructions[3],instructions[4],"switch")
  } else if(instructions[0] == "turn off "){
    gridIterator(instructions[1],instructions[2],instructions[3],instructions[4],0)
  } else if(instructions[0] == "turn on "){
    gridIterator(instructions[1],instructions[2],instructions[3],instructions[4],1)
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
  lightShow(["turn on 998,998 through 999,999","toggle 998,998 through 999,999","toggle 998,998 through 999,999", "turn off 998,998 through 999,999", "turn on 499,499 through 999,999", ""]);
  lightShow(allstrings);
  // console.log(grid)
  result = 0;
  for(var i = 0; i < 1000; i++) {
    for(var j = 0; j < 1000; j++) {
      if(grid[i][j]==1) result+=1;
    }
  }
  return result;
}

console.log(countOnes())

var fs = require('fs');
var input = fs.readFileSync('day3.txt').toString()

function santaPosition(x,y,change){
  switch (change) {
    case "^":
        y++;
        break;
    case ">":
        x++;
        break;
    case "<":
        x--;
        break;
    case "v":
        y--;
        break;
  }
  return [x,y]
};


function calculator(input){

  var beenthere = [ [0,0] ];
  position = [0,0];

  for(var i = 0; i< (input.length - 1); i++){
    position = santaPosition(position[0],position[1],input[i]);
    for(var j = 0; j < beenthere.length; j++){
      visited = [beenthere[j][0],beenthere[j][1]]
      if( visited[0]==position[0] && visited[1]==position[1] ) break;
      if( j === (beenthere.length - 1) ) beenthere.push(position);
    }
  }
  return beenthere
};

console.log(calculator(input).length)

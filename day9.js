var fs = require('fs');
var allstrings = fs.readFileSync('day9.txt').toString().split("\n");

//create every permutation of places possible
var permArr = [],
    usedChars = [];

function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr
};
// console.log(permute(places))

var places = [];
var distance = {};

function addDistance(place1, place2, placeDistance, last) {
    if (places.indexOf(place1) === -1)
        places.push(place1);
    distance[place1] = distance[place1] || {};
    distance[place1][place2] = placeDistance;

    if (!last)
        addDistance(place2, place1, placeDistance, true);
}

allstrings.forEach(function(line) {
    if(line !== ""){
      var match = /^([a-z]+) to ([a-z]+) = ([0-9]+)/i.exec(line);
      var place1 = match[1];
      var place2 = match[2];
      var placeDistance = parseInt(match[3]);

      addDistance(place1, place2, placeDistance);
    }
});

function calculateRouteDistance(route) {
    var d = 0;
    route.forEach(function(place, i) {
        if (i > 0){
            var lastPlace = route[i-1];
            d += distance[lastPlace][place];
        }
    });
    return d;
}

var routes = permute(places);
var shortestDistance = calculateRouteDistance(routes[0]);
var longestDistance = shortestDistance;
routes.forEach(function(route) {
    var d = calculateRouteDistance(route);
    console.log(d)
    shortestDistance = Math.min(shortestDistance, d);
    longestDistance  = Math.max(longestDistance, d);
});

console.log('Shortest: ' + shortestDistance);
console.log('Longest: '  + longestDistance);

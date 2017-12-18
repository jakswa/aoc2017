const knotHash = require('../lib/knot_hash');
const input = "ugkiagan";

var grid = [];
for(var i = 0; i < 128; i++) {
  var hash = knotHash(input + "-" + i);
  grid[i] = hash.split('').map(j => {
    var binary = parseInt(j, 16).toString(2);
    while (binary.length < 4) {
      binary = '0' + binary;
    }
    return binary;
  }).join('').split('');
}

var used = 0;
for(var i = 0; i < grid.length; i++) {
  for(var j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === '1') used++;
  }
}

console.log("part 1 answer", used);

var regions = 0;
for(var i = 0; i < grid.length; i++) {
  for(var j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === '1') {
      regions++;
      dig(i,j);
    }
  }
}

console.log("regions", regions);

function dig(x, y) {
  if (grid[x][y] === '1') {
    grid[x][y] = '2';
    if (x > 0) dig(x-1, y);
    if (x < grid.length-1) dig(x+1, y);
    if (y < 127) dig(x, y+1);
    if (y > 0) dig(x, y-1);
  }
}

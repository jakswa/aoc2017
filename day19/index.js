const fs = require('fs');
const input = fs.readFileSync('./day19/input.txt', 'utf8')
  .split("\n");
const dirs = {
  down: {x: 1, y: 0},
  up: {x: -1, y: 0},
  left: {x: 0, y: -1},
  right: {x: 0, y: 1}
};
const turns = {
  down: ['left', 'right'],
  up: ['left', 'right'],
  left: ['up', 'down'],
  right: ['up', 'down']
};

var pos = {x: 0, y: input[0].indexOf("|")};
var currdir = 'down';
var chrs = [];
var steps = 0;

while (!done()) go();

console.log("part 1", chrs.join(''));
console.log("part 2", steps);


function go() {
  steps++;
  var dir = dirs[currdir];
  pos.x += dir.x;
  pos.y += dir.y;
  var chr = char();
  if (chr.match(/\w/)) {
    chrs.push(chr);
  } else if (chr === '+') {
    turn()
  }
}

function turn() {
  turns[currdir].forEach(i => {
    if (input[pos.x + dirs[i].x][pos.y + dirs[i].y] !== ' ') {
      currdir = i;
    }
  })
}

function char() {
  return input[pos.x][pos.y];
}

function done() {
  return char() === 'S';
}

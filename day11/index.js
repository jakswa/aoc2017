const input = require('./input.json').input.split(",");
const dx = Math.sqrt(0.75)
const dirs = {
  se: {x: dx, y: 0.5},
  sw: {x: -dx, y: 0.5},
  ne: {x: dx, y: -0.5},
  nw: {x: -dx, y: -0.5},
  n: {x: 0, y: -1},
  s: {x: 0, y: 1}
};

var pos = {x: 0, y: 0};
var maxpy = 0, maxx = 0, maxy = 0;
var steps = 0, maxsteps = 0;

input.forEach(i => {
  pos.x += dirs[i].x;
  pos.y += dirs[i].y;
  steps++;
  var pyth = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
  if (pyth > maxpy) {
    maxpy = pyth;
    maxx = pos.x;
    maxy = pos.y;
    maxsteps = steps;
  }
});

console.log(pos.x, pos.y);
console.log(maxx, maxy, maxsteps);


const cubedirs = {
  se: {x: 1, y: -1, z: 0},
  sw: {x: -1, y: 0, z: 1},
  ne: {x: 1, y: 0, z: -1},
  nw: {x: -1, y: 1, z: 0},
  n: {x: 0, y: 1, z: -1},
  s: {x: 0, y: -1, z: 1}
};

pos = {x: 0, y: 0, z: 0};
maxpy = 0, maxx = 0, maxy = 0;
steps = 0, maxsteps = 0;
var maxz = 0;

input.forEach(i => {
  pos.x += cubedirs[i].x;
  pos.y += cubedirs[i].y;
  pos.z += cubedirs[i].z;
  steps++;
  var pyth = (Math.abs(pos.x) + Math.abs(pos.y) + Math.abs(pos.z)) / 2; //Math.sqrt(pos.x * pos.x + pos.y * pos.y + pos.z * pos.z);
  if (pyth > maxpy) {
    maxpy = pyth;
    maxx = pos.x;
    maxy = pos.y;
    maxz = pos.z;
    maxsteps = steps;
  }
});

console.log(pos.x, pos.y, pos.z);
console.log(maxx, maxy, maxz, maxsteps, maxpy);


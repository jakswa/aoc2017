const input = require('./input').input.split("\n").map(i => parseInt(i));

var index = 0;
var steps = 0;

while(index >= 0 && index < input.length) {
  let old = index;
  index += input[index];
  // only +1 to make it part1
  if (input[old] >= 3) {
    input[old] -= 1;
  } else {
    input[old] += 1;
  }
  steps += 1
}

console.log("answer", steps);

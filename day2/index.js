let input = require('./input').input;
input = input.split("\n").map(s => s.split(' ').map(i => parseInt(i)));

let sumchecks = input.reduce((sum, line) => sum + checksum(line), 0);
console.log("sum:", sumchecks)

let twochecks = input.reduce((sum, line) => sum + part2(line), 0);
console.log("sum2:", twochecks)

function checksum(line) {
  let min = line[0], max = line[0];
  let curr;
  for(var i = 0; i < line.length; i++) {
    curr = line[i];
    if (min > curr) {
      min = curr;
    } else if (max < curr) {
      max = curr;
    }
  }
  return max - min;
}

function part2(line) {
  for(var i = 0; i < line.length; i++) {
    for (var j = 0; j < line.length; j++) {
      var res = line[i]/line[j];
      if (res !== 1 && Number.isInteger(res)) return res;
    }
  }
}

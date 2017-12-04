// part 1
// const input = require("./input").input.split("\n").map(s => s.split(' '));

// part 2
const input = require("./input").input.split("\n")
  .map(s => s.split(' ').map(s => s.split('').sort().join('')));


let cnt = input.reduce((cnt, line) => {
  let uniq = {};
  for (var i = 0; i < line.length; i++) {
    if (uniq[line[i]])
      return cnt;
    uniq[line[i]] = true;
  }
  return cnt + 1;
}, 0)

console.log("count", cnt);

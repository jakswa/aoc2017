const input = require("./input").input.split("\n")
  .map(i => i.split(": ").map(i => parseInt(i)))

// -- part 1 --
var severity = 0;
input.forEach(depth => {
  if (depth[0] % ((depth[1] - 1) * 2) === 0) {
    severity += depth[0] * depth[1];
  }
})

console.log("part 1", severity);

// -- part 2 --
var offset = -1;
var scottFree = false;
while (!scottFree) {
  offset++;
  scottFree = true;
  input.forEach(depth => {
    if ((depth[0] + offset) % ((depth[1] - 1) * 2) === 0) {
      scottFree = false;
    }
  });
}
console.log("part 2", offset);

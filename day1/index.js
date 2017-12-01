let input_json = require("./input");

let circle = input_json.input.split('').map(i => parseInt(i));

let sum = 0;
for(var i = 0; i < circle.length; i++) {
  let curr = circle[i];
  let nextInd = (i + 1) % circle.length;
  if (circle[nextInd] == curr)
    sum += curr;
}
console.log("part 1 answer:", sum);


// ---- PART 2

sum = 0;
for(i = 0; i < circle.length; i++) {
  let curr = circle[i];
  let nextInd = (i + circle.length/2) % circle.length;
  if (circle[nextInd] == curr)
    sum += curr;
}
console.log("part 2 answer:", sum);

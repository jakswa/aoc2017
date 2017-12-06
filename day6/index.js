const input = "5 1 10 0 1 7 13 14 3 12 8 10 7 12 0 6"
  .split(' ')
  .map(i => parseInt(i));

var seen = [];

var curr = input.join(' ');
for (var cnt = 0; seen.indexOf(curr) === -1; cnt++) {
  seen.push(curr);
  let redist = input.reduce((a,b) => Math.max(a,b));
  let ind = input.indexOf(redist);
  input[ind] = 0
  while (redist > 0) {
    ind = (ind + 1) % input.length;
    input[ind] ++
    redist --
  }
  curr = input.join(' ');
}

console.log("answer", cnt);
console.log("answer2", seen.length - seen.indexOf(curr));

const start = [634, 301];
const multi = [16807, 48271];
const multiA = multi[0], multiB = multi[1];
const div = 2147483647;
const mask = (1 << 16) - 1;

var matches = 0;
var valA = start[0], valB = start[1];
var genA, genB;
for(var i = 0; i < 5000000; ) {
  if (!genA) {
    valA = (valA * multiA) % div;
    if (valA % 4 === 0) {
      genA = valA;
    }
  }

  if (!genB) {
    valB = (valB * multiB) % div;

    if (valB % 8 === 0) {
      genB = valB;
    }
  }

  if (genA && genB) {
    i++;
    if (i % 100000 === 0) console.log('-ding-', i);
    if ((genA & mask) === (genB & mask))
      matches++;
    genA = null;
    genB = null;
  }
}
console.log('part 2: ', matches);

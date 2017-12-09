const fs = require('fs');
const input = fs.readFileSync("./day9/input.txt", 'utf8');

var level = 0,
  char = null,
  garbage = false,
  count = 0;

// part 1
for (var i = 0; i < input.length; i++) {
  char = input[i];
  switch (char) {
    case '!':
      if (garbage) {
        i++; // skip next
      }
      break;
    case '<': garbage = true; break;
    case '>': garbage = false; break;
    case '{':
      if (!garbage) {
        level++;
        count += level;
      }
      break;
    case '}':
      if (!garbage)
        level--;
      break;
  }
}

console.log("level should be zero:", level);
console.log("count", count);

// part 2
level = 0;
count = 0;
for (var i = 0; i < input.length; i++) {
  char = input[i];
  switch (char) {
    case '!':
      if (garbage) {
        i++; // skip next
      }
      break;
    case '<': 
      if (!garbage) {
        garbage = true;
      } else {
        count++;
      }break;
    case '>': garbage = false; break;
    default: if (garbage) count++; break;
  }
}

console.log("part2: level should be zero:", level);
console.log("part2: count", count);


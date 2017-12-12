const fs = require('fs');
const input = fs.readFileSync('./day12/input.txt', 'utf8').split("\n");
input.pop(); // newline

var mappings = {};
input.forEach(s => {
  s = s.split(' <-> ');
  mappings[parseInt(s[0])] = s[1].split(', ');
});

var res = [];
var keys = Object.keys(mappings);
var cnt = 0;

console.log(keys.length, '--')
while (keys.length) {
  cnt++;
  dig(mappings[keys.pop()])
}
console.log('res', cnt);

function dig(curr) {
  for(var i = 0; i < curr.length; i++) {
    var ind = keys.indexOf(curr[i]);
    if (ind !== -1) {
      keys.splice(ind, 1);
    }
    if (res.indexOf(curr[i]) === -1) {
      res.push(curr[i]);
      dig(mappings[curr[i]]);
    }
  }
}

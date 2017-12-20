const fs = require('fs');
var input = fs.readFileSync('./day20/input.txt', 'utf8')
  .split("\n");
input = input.slice(0,input.length-1);
input = input.map(i => i.match(/[0-9-,]{2,}/g).map(k => k.split(',').map(j => parseInt(j))));

input.forEach((i,ind) => {
  i[4] = ind;
  i[3] = i[2].reduce((j,k) => Math.abs(j) + Math.abs(k));
})

var cnt = 0;

while(cnt++ < 50000) {
  var pos = {};
  for(var i = 0; i < input.length; i++) {
    var key = input[i][0].join(',');
    if (pos[key]) {
      if (pos[key].length === 1) {
        input.splice(pos[key][0],1);
        i--;
      }
      pos[key].push(i);
      input.splice(i, 1);
      i--;
      continue;
    }
    pos[key] = [i];
    for(var j = 1; j >= 0; j--) {
      for(var k = 0; k < 3; k++) {
        input[i][j][k] += input[i][j+1][k];
      }
    }
  }
}

console.log("maybe?", input.length);

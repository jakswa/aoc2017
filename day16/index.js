const input = [];
require('./input').input.split(',').map(j => {
  switch (j[0]) {
    case 's': input.push(['s', parseInt(j.slice(1))]); break;
    case 'x': input.push(['x', j.slice(1).split('/').map(i => parseInt(i))]); break;
    case 'p': input.push(['p', j.slice(1).split('/')]); break;
  }
});

var list = [];
for(var i = 0; i <= 'p'.charCodeAt(0) - 'a'.charCodeAt(0); i++)
  list.push(String.fromCharCode('a'.charCodeAt(0) + i)); 

for(var o = 1; o <= 1000000000; o++) {
  // if (o % 1000 === 0) console.log('-ding-', o);
  for(var oo = 0; oo < input.length; oo++) {
    inp = input[oo];
    switch (inp[0]) {
      case 's': spin(inp[1]); break;
      case 'x': exchange(inp[1][0], inp[1][1]); break;
      case 'p': partner(inp[1][0], inp[1][1]); break;
    }
  };
  // DETECTING LOOP, FAST-FORWARDING
  if (list.join('') === 'abcdefghijklmnop') {
    o = 1000000000 - (1000000000 % o);
  }
}

console.log('done', list.join(''));

function spin(a) {
  list = list.splice(list.length - a,15).concat(list);
}

function exchange(a,b) {
  var tmp = list[a];
  list[a] = list[b];
  list[b] = tmp;
}

function partner(aa, bb) {
  exchange(list.indexOf(aa), list.indexOf(bb));
}

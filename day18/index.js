const input = require('./input').input.split("\n")
  .map(i => i.split(' '));

input.forEach(i => {
  var parse = parseInt(i[1]);
  if (!Number.isNaN(parse)) i[1] = parse;
  parse = parseInt(i[2]);
  if (!Number.isNaN(parse)) i[2] = parse;
});

var reg = {a: {p: 0}, b: {p: 1}};
var curr = {a: 0, b: 0};
var hots = {};
var blocked = {a: false, b: false};
var recv = {a: [], b: []};
var snds = {a: 0, b: 0};
var cnt = 0;

while(curr.a < input.length && curr.b < input.length && !deadlock()) {
  var instr = input[curr.b];
  cmd('b', instr[0], instr[1], instr[2]);
  instr = input[curr.a];
  hots[curr.a] = (hots[curr.a] || 0) + 1;
  cmd('a', instr[0], instr[1], instr[2]);
}

console.log("done", snds);

function cmd(p, c,a,b) {
  switch(c) {
    case 'snd':
      lp = recv[p == 'a' ? 'b' : 'a'].push(get(p, a))
      snds[p]++;
      break;
    case 'set':
      reg[p][a] = get(p, b);
      break;
    case 'add':
      reg[p][a] = get(p, a) + get(p, b);
      break;
    case 'mul':
      reg[p][a] = get(p, a) * get(p, b);
      break;
    case 'mod':
      reg[p][a] = get(p, a) % get(p, b);
      break;
    case 'rcv':
      if (recv[p].length) {
        reg[p][a] = recv[p].shift();
      } else {
        blocked[p] = true;
        return;
      }
      break;
    case 'jgz':
      if(get(p, a) > 0) {
        curr[p] += get(p, b) - 1;
      }
      break;
  }
  curr[p]++;
}

function deadlock() {
  if(blocked.a && recv.a.length) {
    blocked.a = false;
  } else if(blocked.b && recv.b.length) {
    blocked.b = false;
  } else if(blocked.a && blocked.b) {
    return true;
  }
}

function get(p, val) {
  if(Number.isInteger(val)) return val;
  return reg[p][val] || 0;
}

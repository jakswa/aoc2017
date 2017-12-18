const input = require('./input').input.split("\n")
  .map(i => i.split(' '));

input.forEach(i => {
  var parse = parseInt(i[1]);
  if (!Number.isNaN(parse)) i[1] = parse;
  parse = parseInt(i[2]);
  if (!Number.isNaN(parse)) i[2] = parse;
});

var registers = {};
var lp, recvd;
var curr = 0;
var cnt = 0;
var max = 0;

while(curr < input.length) {
  cmd.apply(null, input[curr]);
}
console.log('done', recvd);
console.log('done', curr, JSON.stringify(registers));

function cmd(c,a,b) {
  switch(c) {
    case 'snd':
      lp = get(a)
      break;
    case 'set':
      registers[a] = get(b);
      break;
    case 'add':
      registers[a] = get(a) + get(b);
      break;
    case 'mul':
      registers[a] = get(a) * get(b);
      break;
    case 'mod':
      registers[a] = get(a) % get(b);
      break;
    case 'rcv':
      if(get(a) && !recvd) throw "WOO" + lp;
      break;
    case 'jgz':
      if(get(a)) {
        curr += get(b) - 1;
      }
      break;
  }
  curr++;
  if(curr > max) {
    max = curr;
    console.log('hit', max, input[curr]);
  }
}

function get(reg) {
  if(Number.isInteger(reg)) return reg;
  return registers[reg] || 0;
}

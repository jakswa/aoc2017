const input = require('./input').input.split("\n")
  .map(i => i.split(' if '));

input.forEach(j => {
  j[0] = j[0].split(' ');
  j[1] = j[1].split(' ');
})

var cnts = {};
var max = 0;

input.forEach(instr => {
  var conds = instr[1];
  if (cond(val(conds[0]), conds[1], parseInt(conds[2]))) {
    var todo = instr[0];
    console.log("todo:", todo);
    cnts[todo[0]] = cnts[todo[0]] || 0;
    switch (todo[1]) {
      case 'dec': cnts[todo[0]] -= parseInt(todo[2]); break;
      case 'inc': cnts[todo[0]] += parseInt(todo[2]); break;
    }
    if (val(todo[0]) > max) max = cnts[todo[0]];
  }
});

console.log("max", max);

function val(key) {
  return cnts[key] || 0;
}

function cond(val, comparison, compareTo) {
  console.log("cond:", val, comparison, compareTo);
  switch(comparison) {
    case '<=': return val <= compareTo;
    case '<': return val < compareTo;
    case '>=': return val >= compareTo;
    case '>': return val > compareTo;
    case '==': return val == compareTo;
    case '!=': return val != compareTo;
    default: throw 'huh';
  }
}

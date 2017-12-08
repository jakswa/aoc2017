const input = require("./input").input.split("\n")
  .map(i => i.match(/^(\w+) \((\d+)\)(?: -> (.*))?$/));

var parents = {};
var childs = {};
var weights = {};
var root;
input.forEach(i => {
  let parent = i[1]
  weights[parent] = parseInt(i[2])
  let children = i[3] && i[3].split(', ')
  if (!children) return;
  childs[parent] = children;
  children.forEach(i => {
    parents[i] = parent
  });
  
  if (!root) {
    root = parent;
  } else if (parents[root]) {
    while (parents[root]) root = parents[root];
  }
})
console.log(root);
sumDig(root)

function sumDig(node) {
  if (childs[node]) {
    var childWeights = childs[node].map(n => sumDig(n));
    if (uniq(childWeights).length > 1) {
      console.log('boom:', childWeights, childs[node].map(n => weights[n]))
      throw "found it! read above"
    }
    return weights[node] + childWeights.reduce((i,j) => i + j);
  } else {
    return weights[node]
  }
}

function uniq(arr) {
  return arr.filter((f, ind) => arr.indexOf(f) === ind)
}

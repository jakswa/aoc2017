
// =======================================================
// ==== part 1, I went quadratic equation on this shit >_<
// =======================================================

part1(361527);

function part1(input) {
  let level = levelFor(input);
  let levelPosition = input - sumBelowLevel(level);
  let numInLevel = (level + 1) * 8;
  let numInSide = numInLevel / 4;
  let step = Math.abs((levelPosition % numInSide) - numInSide/2)
  console.log("answer", level + step);
}

// returns amount of values below current level
function sumBelowLevel(n) {
  return n * (n+1) * 4;
}

// quadratic solution for 4n^2 + 4n - <input>
// (with Math.floor on result, gives level)
function levelFor(n) {
  return Math.floor((-4 + Math.sqrt(16 + 16*n)) / 8);
}


// ==================================================
// === part 2, wtf, they doing strange fibonacci shit
// ==================================================



var dist = [[1]];
var level = 1, pos = 0;
var posx = 0, posy = 0;
var xx = 1, yy = 0;
var square = [[1]];
part2(361527);

function part2(n) {
  do {
    let numInLevel = level * 8;
    if (numInLevel === pos) {
      level += 1;
      pos = 0;
    }
    if (posx + xx > level) {
      yy = 1;
      xx = 0;
    } else if (posy + yy > level) {
      xx = -1;
      yy = 0;
    } else if (posx + xx < -level) {
      yy = -1;
      xx = 0;
    } else if (posy + yy < -level) {
      xx = 1;
      yy = 0;
    }
    posx += xx;
    posy += yy;
    if (!dist[level]) dist[level] = [];
    var prev = dist[level][pos] = adjSum(posx,posy);
    set(posx,posy,prev);
    pos += 1;
  } while (prev <= n);

  console.log('finished:', prev);
}

function adjSum(x,y) {
  let sum = 0;
  for(var i = -1; i <= 1; i++) {
    for(var j = -1; j <=1; j++) {
      if(i === 0 && j === 0) continue;
      sum += valAt(x + i, y + j);
    }
  }
  return sum;
}

function set(x, y, val) {
  if (!square[x]) square[x] = [];
  square[x][y] = val;
}

function valAt(x,y) {
  return square[x] && square[x][y] || 0;
}


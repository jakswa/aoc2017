module.exports = function knotHash(input) {
  input = input.split('').map(i => i.charCodeAt(0)).concat([17, 31, 73, 47, 23]);
  var list = {};
  for(var i = 0; i <= 255; i++) {
    list[i] = { val: i, next: i+1 };
  }
  list[255].next = 0;
  var curr = 0,
    skipSize = 0;

  for(var wat = 0; wat < 64; wat++) {
    for(var j = 0; j < input.length; j++) {
      var l = input[j];
      var mid = Math.floor(l / 2);
      for(var w = 0; w < mid; w++) {
        var swapl = list[(curr + w) % 256];
        var swapr = list[(curr + l - w - 1 ) % 256];
        var tmp = swapl.val;
        swapl.val = swapr.val;
        swapr.val = tmp;
      }
      curr += (l + skipSize) % 256;
      skipSize = (skipSize + 1) % 256;
    }
  }

  var res = []
  for(var o = 0; o < 16; o++) {
    var bor = list[o * 16].val;
    for (var p = 1; p < 16; p++) {
      bor ^= list[o * 16 + p].val;
    }
    res.push(bor);
  }

  return res.map(i => {
    let s = i.toString(16)
    if (s.length === 1) s = '0' + s;
    return s;
  }).join('')
}

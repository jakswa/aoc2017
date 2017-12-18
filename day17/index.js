const input = 349;

var len = 2;
var cnt = 1;
var pos = 1;
var afterZero;

while(cnt < 50000000) {
  var ind = (pos + input) % len;
  pos = ind + 1;
  cnt++;
  len += 1;
  if (pos === 1) afterZero = cnt;
}

console.log('done', afterZero);

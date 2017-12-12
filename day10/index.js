var lengths = '165,1,255,31,87,52,24,113,0,91,148,254,158,2,73,153'.split('')
	.map(i => i.charCodeAt(0));
lengths = lengths.concat([17, 31, 73, 47, 23]);
var list = {};

var listLen = 256;
for(var i = 0; i < listLen; i++) {
  list[i] = { val: i, next: i+1 };
}
list[255].next = 0


var curr = 0,
  skipSize = 0;

for(var wat = 0; wat < 64; wat++) {
	for(var j = 0; j < lengths.length; j++) {
		var l = lengths[j];
		var mid = Math.floor(l / 2);
		for(var w = 0; w < mid; w++) {
			var swapl = list[(curr + w) % listLen];
			var swapr = list[(curr + l - w - 1 ) % listLen];
			var tmp = swapl.val;
			swapl.val = swapr.val;
			swapr.val = tmp;
		}
		curr += (l + skipSize) % listLen;
		skipSize = (skipSize + 1) % listLen;
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

// console.log("list", JSON.stringify(list));
console.log(res.map(i => {
	let s = i.toString(16)
	if (s.length === 1) s = '0' + s;
	return s;
}).join(''));

/*
    Copyright 2020 Holger https://holger.net.cn Under GPLv3.0 @ https://github.com/holgerhuo/minimalist-search
*/
var _0xbcdf = ["\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65", "\x74\x61\x67\x4E\x61\x6D\x65",
	"\x61\x63\x74\x69\x76\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x69\x6E\x70\x75\x74", "\x42\x4C\x55\x52\x52\x45\x44",
	"\x6C\x6F\x67", "\x62\x6C\x75\x72", "\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74", "\x63\x6C\x69\x63\x6B",
	"\x74\x61\x72\x67\x65\x74", "\x49\x4E\x50\x55\x54", "\x4D\x41\x4E\x55\x41\x4C\x20\x43\x4C\x49\x43\x4B",
	"\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72", "\x62\x6F\x64\x79",
	"\x6B\x65\x79\x64\x6F\x77\x6E"
];
var maxTime = 10;
var timeoutInterval = 5;
var usedTime = 0;
var isManualFocus = false;

function check() {
	if (!isManualFocus && document[_0xbcdf[2]][_0xbcdf[1]][_0xbcdf[0]]() == _0xbcdf[3]) {
		console[_0xbcdf[5]](_0xbcdf[4]);
		document[_0xbcdf[2]][_0xbcdf[6]]()
	};
	usedTime += timeoutInterval;
	if (usedTime < maxTime) {
		window[_0xbcdf[7]](check, timeoutInterval)
	}
}
check();
document[_0xbcdf[13]][_0xbcdf[12]](_0xbcdf[8], function(_0x45a9x6) {
	if (_0x45a9x6[_0xbcdf[9]][_0xbcdf[1]] == _0xbcdf[10]) {
		console[_0xbcdf[5]](_0xbcdf[11]);
		isManualFocus = true
	}
});
document[_0xbcdf[13]][_0xbcdf[12]](_0xbcdf[14], function(_0x45a9x6) {
	isManualFocus = true
});
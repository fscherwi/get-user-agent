import test from 'ava';

const parser = require('ua-parser-js');
const useragent = require('./main.js');
const sysInfo = require('./sys-info.js');

let ua;

test('sysInfo', t => {
	const version = '41.0';
	ua = parser(useragent.firefox(version, sysInfo));
	t.is(ua.browser.version, version);
});

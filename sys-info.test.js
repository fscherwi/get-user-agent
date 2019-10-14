import test from 'ava';

import {firefox} from './main';
const parser = require('ua-parser-js');

test('empty sysInfo', t => {
	const version = '41.0';
	const ua = parser(firefox(version));
	t.is(ua.browser.version, version);
});

test('predefined Mac OS sysInfo', t => {
	const version = '41.0';
	const sysInfo = 'Macintosh; Intel Mac OS X 10.15';
	const ua = parser(firefox(version, sysInfo));
	t.is(ua.browser.version, version);
	t.is(ua.os.name, 'Mac OS');
	t.is(ua.os.version, '10.15');
});

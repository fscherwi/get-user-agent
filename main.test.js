import test from 'ava';

const parser = require('ua-parser-js');
const useragent = require('./main.js');

let ua;

test('Chrome', t => {
	const version = '41.0.2228.0';
	ua = parser(useragent.chrome(version));
	t.is(ua.browser.name, 'Chrome');
	t.is(ua.browser.version, version);
});

test('Chrome Advanced', t => {
	const version = '41.0.2228.0';
	const webkitVersion = '537.36';
	ua = parser(useragent.chromeAdvanced(version, webkitVersion));
	t.is(ua.browser.name, 'Chrome');
	t.is(ua.browser.version, version);
});

test('Firefox', t => {
	const version = '41.0';
	ua = parser(useragent.firefox(version));
	t.is(ua.browser.name, 'Firefox');
	t.is(ua.browser.version, version);
});

test('Firefox Advanced', t => {
	const version = '41.0';
	const geckoVersion = '20100101';
	ua = parser(useragent.firefoxAdvanced(version, geckoVersion));
	t.is(ua.browser.name, 'Firefox');
	t.is(ua.browser.version, version);
});

test('Opera', t => {
	const version = '12.6';
	ua = parser(useragent.opera(version));
	t.is(ua.browser.name, 'Opera');
	t.is(ua.browser.version, version);
});

test('Opera Advanced', t => {
	const version = '12.6';
	const prestoVersion = '2.12.388';
	const operaVersion = '9.80';
	ua = parser(useragent.operaAdvanced(version, prestoVersion, operaVersion));
	t.is(ua.browser.name, 'Opera');
	t.is(ua.browser.version, version);
});

test('Safari', t => {
	const version = '10.0.3';
	ua = parser(useragent.safari(version));
	t.is(ua.browser.name, 'Safari');
	t.is(ua.browser.version, version);
});

test('Safari Advanced', t => {
	const version = '10.0.3';
	const webkitBuildVersion = '602.4.8';
	const safariBuildVersion = '602.4.8';
	ua = parser(useragent.safariAdvanced(version, webkitBuildVersion, safariBuildVersion));
	t.is(ua.browser.name, 'Safari');
	t.is(ua.browser.version, version);
});

test('sysInfo', t => {
	const version = '41.0';
	const sysInfo = 'Macintosh; Intel Mac OS X 10.11';
	ua = parser(useragent.firefox(version, sysInfo));
	t.is(ua.browser.name, 'Firefox');
	t.is(ua.browser.version, version);
});

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
  var version = '41.0.2228.0';
  var webkitVersion = '537.36';
  ua = parser(useragent.chromeAdvanced(version, webkitVersion));
	t.is(ua.browser.name, 'Chrome');
	t.is(ua.browser.version, version);
});

test('Firefox', t => {
  var version = '41.0';
  ua = parser(useragent.firefox(version));
	t.is(ua.browser.name, 'Firefox');
	t.is(ua.browser.version, version);
});

test('Firefox Advanced', t => {
  var version = '41.0';
  var geckoVersion = '20100101';
  ua = parser(useragent.firefoxAdvanced(version, geckoVersion));
	t.is(ua.browser.name, 'Firefox');
	t.is(ua.browser.version, version);
});

test('Opera', t => {
  var version = '12.6';
  ua = parser(useragent.opera(version));
	t.is(ua.browser.name, 'Opera');
	t.is(ua.browser.version, version);
});

test('Opera Advanced', t => {
  var version = '12.6';
  var prestoVersion = '2.12.388';
  var operaVersion = '9.80';
  ua = parser(useragent.operaAdvanced(version, prestoVersion));
	t.is(ua.browser.name, 'Opera');
	t.is(ua.browser.version, version);
});

test('Safari', t => {
  var version = '10.0.3';
  ua = parser(useragent.safari(version));
	t.is(ua.browser.name, 'Safari');
	t.is(ua.browser.version, version);
});

test('Safari Advanced', t => {
  var version = '10.0.3';
  var webkitBuildVersion = '602.4.8';
  var safariBuildVersion = '602.4.8';
  ua = parser(useragent.safariAdvanced(version, webkitBuildVersion, safariBuildVersion));
	t.is(ua.browser.name, 'Safari');
	t.is(ua.browser.version, version);
});

test('sysInfo', t => {
  var version = '41.0';
  var sysInfo = 'Macintosh; Intel Mac OS X 10.11';
  ua = parser(useragent.firefox(version, sysInfo));
	t.is(ua.browser.name, 'Firefox');
	t.is(ua.browser.version, version);
});

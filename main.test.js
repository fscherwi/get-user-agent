var useragent = require('./main.js');
var parser = require('ua-parser-js');
var ua;

test('Chrome', () => {
  var version = '41.0.2228.0';
  ua = parser(useragent.chrome(version));
  expect(ua.browser.name).toBe('Chrome');
  expect(ua.browser.version).toBe(version);
});

test('Chrome Advanced', () => {
  var version = '41.0.2228.0';
  var webkitVersion = '537.36';
  ua = parser(useragent.chromeAdvanced(version, webkitVersion));
  expect(ua.browser.name).toBe('Chrome');
  expect(ua.browser.version).toBe(version);
});

test('Firefox', () => {
  var version = '41.0';
  ua = parser(useragent.firefox(version));
  expect(ua.browser.name).toBe('Firefox');
  expect(ua.browser.version).toBe(version);
});

test('Firefox Advanced', () => {
  var version = '41.0';
  var geckoVersion = '20100101';
  ua = parser(useragent.firefoxAdvanced(version, geckoVersion));
  expect(ua.browser.name).toBe('Firefox');
  expect(ua.browser.version).toBe(version);
});

test('Opera', () => {
  var version = '12.6';
  ua = parser(useragent.opera(version));
  expect(ua.browser.name).toBe('Opera');
  expect(ua.browser.version).toBe(version);
});

test('Opera Advanced', () => {
  var version = '12.6';
  var prestoVersion = '2.12.388';
  var operaVersion = '9.80';
  ua = parser(useragent.operaAdvanced(version, prestoVersion));
  expect(ua.browser.name).toBe('Opera');
  expect(ua.browser.version).toBe(version);
});

test('Safari', () => {
  var version = '10.0.3';
  ua = parser(useragent.safari(version));
  expect(ua.browser.name).toBe('Safari');
  expect(ua.browser.version).toBe(version);
});

test('Safari Advanced', () => {
  var version = '10.0.3';
  var webkitBuildVersion = '602.4.8';
  var safariBuildVersion = '602.4.8';
  ua = parser(useragent.safariAdvanced(version, webkitBuildVersion, safariBuildVersion));
  expect(ua.browser.name).toBe('Safari');
  expect(ua.browser.version).toBe(version);
});

test('sysInfo', () => {
  var version = '41.0';
  var sysInfo = 'Macintosh; Intel Mac OS X 10.11';
  ua = parser(useragent.firefox(version, sysInfo));
  expect(ua.browser.name).toBe('Firefox');
  expect(ua.browser.version).toBe(version);
});

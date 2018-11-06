var useragent = require('./main.js');
var sysInfo = require('./sys-info.js');
var parser = require('ua-parser-js');
var ua;

test('sysInfo', () => {
  var version = '41.0';
  ua = parser(useragent.firefox(version, sysInfo));
  expect(ua.browser.version).toBe(version);
});

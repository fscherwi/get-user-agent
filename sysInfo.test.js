var useragent = require('./main.js');
var sysInfo = require('./sysInfo.js');
var parser = require('ua-parser-js');
var ua;

test('sysInfo', () => {
  var version = '41.0';
  var sysInfoStrign = sysInfo.get();
  ua = parser(useragent.firefox(version, sysInfo));
  expect(ua.browser.version).toBe('41.0');
});

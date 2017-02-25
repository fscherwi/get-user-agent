var useragent = require('./main.js');
var parser = require('ua-parser');
var agents = [
  useragent.chrome('41.0.2228.0'),
  useragent.chrome_advanced(version = '41.0.2228.0', webkit_version = '537.36'),
  useragent.firefox('41.0'),
  useragent.firefox_advanced(version = '41.0', gecko_version = '20100101'),
  useragent.opera('12.6'),
  useragent.opera_advanced(version = '12.6', presto_version = '2.12.388', opera_version = '9.80'),
  useragent.safari('10.0.3'),
  useragent.safari_advanced(version='10.0.3', webkit_build_version='602.4.8', safari_build_version='602.4.8')
];
agents.forEach(function(user_agent) {
  console.log('%s (%s):\t %s', parser.parse(user_agent).ua.toString(), parser.parse(user_agent).os.toString(), user_agent);
});
console.log('');

var useragent = require("./main.js");
var parser = require('ua-parser-js');
var ua;
var agents = [
  useragent.chrome("41.0.2228.0"),
  useragent.chromeAdvanced("41.0.2228.0", "537.36"),
  useragent.firefox("41.0"),
  useragent.firefoxAdvanced("41.0", "20100101"),
  useragent.opera("12.6"),
  useragent.operaAdvanced("12.6", "2.12.388", "9.80"),
  useragent.safari("10.0.3"),
  useragent.safariAdvanced("10.0.3", "602.4.8", "602.4.8")
];
agents.forEach(function(UserAgent) {
  ua = parser(UserAgent);
  console.log("%s %s (%s %s):\t %s", ua.browser.name, ua.browser.version, ua.os.name, ua.os.version, UserAgent);
});

var useragent = require("./main.js");
var parser = require("ua-parser");
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
agents.forEach(function (UserAgent) {
  console.log("%s (%s):\t %s", parser.parse(UserAgent).ua.toString(), parser.parse(UserAgent).os.toString(), UserAgent);
});

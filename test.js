var useragent = require("./main.js");
var parser = require("ua-parser");
var agents = [
  useragent.chrome("41.0.2228.0"),
  useragent.chrome_advanced(version = "41.0.2228.0", WebkitVersion = "537.36"),
  useragent.firefox("41.0"),
  useragent.firefox_advanced(version = "41.0", GeckoVersion = "20100101"),
  useragent.opera("12.6"),
  useragent.opera_advanced(version = "12.6", PrestoVersion = "2.12.388", opera_version = "9.80"),
  useragent.safari("10.0.3"),
  useragent.safari_advanced(version="10.0.3", WebkitBuildVersion="602.4.8", SafariBuildVersion="602.4.8")
];
agents.forEach(function(UserAgent) {
  console.log("%s (%s):\t %s", parser.parse(UserAgent).ua.toString(), parser.parse(UserAgent).os.toString(), UserAgent);
});
console.log("");

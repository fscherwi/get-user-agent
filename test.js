var useragent = require('./main.js');
var r = require('ua-parser');

var chrome = useragent.chrome("41.0.2228.0"),
  chrome_advanced = useragent.chrome_advanced(version = "41.0.2228.0", webkit_version = "537.36"),
  firefox = useragent.firefox("40.0"),
  firefox_advanced = useragent.firefox_advanced(version = "40.0", gecko_version = "20100101"),
  opera = useragent.opera("12.6"),
  opera_advanced = useragent.opera_advanced(version = "12.6", presto_version = "2.12.388", opera_version = "9.80");

console.log("\n%s (%s): \t %s", r.parse(chrome).ua.toString(), r.parse(chrome).os.toString(), chrome);
console.log("%s \t (%s): \t %s", r.parse(firefox).ua.toString(), r.parse(firefox).os.toString(), firefox);
console.log("%s \t (%s): \t %s", r.parse(opera).ua.toString(), r.parse(opera).os.toString(), opera);

console.log("\n%s (%s): \t %s", r.parse(chrome_advanced).ua.toString(), r.parse(chrome_advanced).os.toString(), chrome_advanced);
console.log("%s \t (%s): \t %s", r.parse(firefox_advanced).ua.toString(), r.parse(firefox_advanced).os.toString(), firefox_advanced);
console.log("%s \t (%s): \t %s\n", r.parse(opera_advanced).ua.toString(), r.parse(opera_advanced).os.toString(), opera_advanced);

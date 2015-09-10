var  useragent = require('./main.js');

console.log("\n" + useragent.chrome("41.0.2228.0"));
console.log(useragent.firefox("40.0"));
console.log(useragent.opera("2.12.388") + "\n");

console.log("\n" + useragent.chrome_advanced(version="41.0.2228.0", webkit_version="537.36"));
console.log(useragent.firefox_advanced(version="40.0", gecko_version="20100101"));
console.log(useragent.opera_advanced(version="2.12.388", presto_version="2.12.388") + "\n");

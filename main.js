var os = require('os');

/* istanbul ignore next */
if (os.platform() === 'darwin') {
  var version = require('get-osx-version').get();
  var platform = 'Macintosh; Intel Mac OS X ';
  var osinfo = platform + version;
} else if (os.platform() === 'win32') {
  var platform = "Windows";
  if (os.arch() === 'x64') {
    var arch = " ; Win64; x64";
  } else if (os.arch() === 'ia32') {
    var arch = "";
  } else if (os.arch() === 'arm') {
    var arch = "; ARM";
  } else {
    var arch = "";
  }
  var osinfo = " (" + platform + arch + ")";
} else if (os.platform() === 'linux') {
  var platform = 'Linux';
  if (os.arch() === 'x64') {
    var arch = " x86_64";
  } else if (os.arch() === 'ia32') {
    var arch = "";
  } else if (os.arch() === 'arm') {
    var arch = "; ARM";
  } else {
    var arch = "";
  }
  var osinfo = platform + arch;
} else {
  var osinfo = "";
}

exports.chrome = function chrome(version) {
  var useragent_string = "Mozilla/5.0" + " (" + osinfo + ")" + " AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + version + " Safari/537.36";
  return useragent_string;
};

exports.firefox = function firefox(version) {
  var useragent_string = "Mozilla/5.0" + " (" + osinfo + "; rv:" + version + ")" + " Gecko/20100101 Firefox/" + version;
  return useragent_string;
};

exports.opera = function opera(version) {
  var useragent_string = "Opera (" + osinfo + " ) Presto Version/" + version;
  return useragent_string;
};

exports.chrome_advanced = function chrome_advanced(version, webkit_version) {
  var useragent_string = "Mozilla/5.0" + " (" + osinfo + ")" + " AppleWebKit/" + webkit_version + " (KHTML, like Gecko) Chrome/" + version + " Safari/" + webkit_version;
  return useragent_string;
};

exports.firefox_advanced = function firefox_advanced(version, gecko_version) {
  var useragent_string = "Mozilla/5.0" + " (" + osinfo + "; rv:" + version + ")" + " Gecko/" + gecko_version + " Firefox/" + version;
  return useragent_string;
};

exports.opera_advanced = function opera_advanced(version, presto_version) {
  var useragent_string = "Opera (" + osinfo + " ) Presto/" + presto_version + " Version/" + version;
  return useragent_string;
};

var os = require('os');

if (os.platform() === 'darwin') {
  var platform = 'Mac OS X';
  var osinfo = " (" + platform + ")";
} else if (os.platform() === 'win32') {
  var platform = "Windows";
  if (os.arch() === 'x64') {
    var arch = " ; Win64; x64";
  } else if (os.arch() === 'ia32') {
    var arch = "";
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
  } else {
    var arch = "";
  }
  var osinfo = " (" + platform + arch + ")";
} else {
  var osinfo = "";
}

function chrome() {
  var useragent_string = "Mozilla/5.0" + osinfo + " AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari/537.36";
  return useragent_string;
}

function firefox() {
  var useragent_string = "Mozilla/5.0" + osinfo + " Gecko/20100101 Firefox";
  return useragent_string;
}

function opera() {
  var useragent_string = "Opera" + osinfo + " Presto";
  return useragent_string;
}

module.exports.chrome = chrome;
module.exports.firefox = firefox;
module.exports.opera = opera;

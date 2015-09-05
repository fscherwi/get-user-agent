var os = require('os');

var arch;
var platform;
var osinfo
var useragent_string;

function getsystem() {
  if (os.platform() === 'darwin') {
    platform = 'Mac OS X';
    osinfo = " (" + platform + ")";
  } else if (os.platform() === 'win32') {
    platform = 'Windows';
    if (os.arch() === 'x64') {
      arch = " ; Win64; x64";
    } else if (os.arch() === 'ia32') {
      arch = "";
    }
    osinfo = " (" + platform + arch + ")";
  } else if (os.platform() === 'linux') {
    platform = 'Linux';
    if (os.arch() === 'x64') {
      arch = ' x86_64';
    } else if (os.arch() === 'ia32') {
      arch = ' i586';
    }
    osinfo = " (" + platform + arch + ")";
  } else {
    osinfo = "";
  }
}

function useragent() {
  getsystem();
  useragent_string = "Mozilla/5.0" + osinfo + " Gecko/20100101 Firefox";
  return useragent_string;
}

module.exports = typeof os.useragent === 'function' ? os.useragent : useragent;

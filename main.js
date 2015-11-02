var os = require('os');
var arch,
  osinfo,
  platform;
/* istanbul ignore next */
if (os.platform() === 'darwin') {
  arch = require('get-osx-version').get();
  platform = 'Macintosh; Intel Mac OS X ';
} else if (os.platform() === 'win32') {
  platform = 'Windows';
  if (os.arch() === 'x64') {
    arch = ' ; Win64; x64';
  } else if (os.arch() === 'arm') {
    arch = '; ARM';
  }
} else if (os.platform() === 'linux') {
  platform = 'Linux';
  if (os.arch() === 'x64') {
    arch = ' x86_64';
  } else if (os.arch() === 'ia32') {
    arch = '';
  } else if (os.arch() === 'arm') {
    arch = '; ARM';
  }
}
osinfo = platform + arch;
module.exports = {
  chrome: function chrome(version) {
    return 'Mozilla/5.0' + ' (' + osinfo + ')' + ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/' + version + ' Safari/537.36';
  },
  chrome_advanced: function chrome_advanced(version, webkit_version) {
    return 'Mozilla/5.0' + ' (' + osinfo + ')' + ' AppleWebKit/' + webkit_version + ' (KHTML, like Gecko) Chrome/' + version + ' Safari/' + webkit_version;
  },
  firefox: function firefox(version) {
    return 'Mozilla/5.0' + ' (' + osinfo + '; rv:' + version + ')' + ' Gecko/20100101 Firefox/' + version;
  },
  firefox_advanced: function firefox_advanced(version, gecko_version) {
    return 'Mozilla/5.0' + ' (' + osinfo + '; rv:' + version + ')' + ' Gecko/' + gecko_version + ' Firefox/' + version;
  },
  opera: function opera(version) {
    return 'Opera/9.80 (' + osinfo + ') Presto/2.12.388 Version/' + version;
  },
  opera_advanced: function opera_advanced(version, presto_version, opera_version) {
    return 'Opera/' + opera_version + ' (' + osinfo + ') Presto/' + presto_version + ' Version/' + version;
  }
};

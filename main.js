function get_sys_info(sys_info) {/* istanbul ignore next */
  if (sys_info) {
    return sys_info;
  } else {
    var os = require('os');
    switch (os.platform()) {
      case 'darwin':
        return 'Macintosh; Intel Mac OS X ' + require('get-osx-version').get();
      case 'windows':
        if (os.arch() === 'x64') {
          return 'Windows; Win64; x64';
        } else if (os.arch() === 'arm') {
          return 'Windows; ARM';
        }
        break;
      case 'linux':
        if (os.arch() === 'x64') {
          return 'Linux; x86_64';
        } else if (os.arch() === 'arm') {
          return 'Linux; ARM';
        }
        break;
    }
  }
}
module.exports = {
  chrome: function chrome(version, sys_info) {
    return 'Mozilla/5.0' + ' (' + get_sys_info(sys_info) + ')' + ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/' + version + ' Safari/537.36';
  },
  chrome_advanced: function chrome_advanced(version, webkit_version, sys_info) {
    return 'Mozilla/5.0' + ' (' + get_sys_info(sys_info) + ')' + ' AppleWebKit/' + webkit_version + ' (KHTML, like Gecko) Chrome/' + version + ' Safari/' + webkit_version;
  },
  firefox: function firefox(version, sys_info) {
    return 'Mozilla/5.0' + ' (' + get_sys_info(sys_info) + '; rv:' + version + ')' + ' Gecko/20100101 Firefox/' + version;
  },
  firefox_advanced: function firefox_advanced(version, gecko_version, sys_info) {
    return 'Mozilla/5.0' + ' (' + get_sys_info(sys_info) + '; rv:' + version + ')' + ' Gecko/' + gecko_version + ' Firefox/' + version;
  },
  opera: function opera(version, sys_info) {
    return 'Opera/9.80 (' + get_sys_info(sys_info) + ') Presto/2.12.388 Version/' + version;
  },
  opera_advanced: function opera_advanced(version, presto_version, opera_version, sys_info) {
    return 'Opera/' + opera_version + ' (' + get_sys_info(sys_info) + ') Presto/' + presto_version + ' Version/' + version;
  },
  safari: function safari(version, sys_info) {
    return 'Mozilla/5.0 (' + get_sys_info(sys_info) + ') AppleWebKit/601.4.4 (KHTML, like Gecko) Version/' + version + ' Safari/601.4.4';
  },
  safari_advanced: function safari_advanced(version, sys_info, webkit_build_version, safari_build_version) {
    return 'Mozilla/5.0 (' + get_sys_info(sys_info) + ') AppleWebKit/' + webkit_build_version + ' (KHTML, like Gecko) Version/' + version + ' Safari/' + safari_build_version;
  }
};

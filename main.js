function get_sys_info(sys_info) { /* istanbul ignore next */
  if (sys_info) {
    return sys_info;
  } else {
    var os = require('os');
    switch (os.platform()) {
      case 'darwin':
        return 'Macintosh; Intel Mac OS X ' + require('get-osx-version').get();
      case 'windows':
        switch (os.arch()) {
          case 'x64':
            return 'Windows; Win64; x64';
          case 'x86':
            return 'Windows; Win32; x86';
          case 'arm':
            return 'Windows; ARM';
          default:
            return 'Windows';
        }
        break;
      case 'linux':
        switch (os.arch()) {
          case 'x64':
            return 'Linux; x86_64';
          case 'i686':
            return 'Linux; i686';
          case 'arm':
            return 'Linux; ARM';
          default:
            return 'Linux';
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
    return 'Mozilla/5.0 (' + get_sys_info(sys_info) + ') AppleWebKit/601.4.8 (KHTML, like Gecko) Version/' + version + ' Safari/601.4.8';
  },
  safari_advanced: function safari_advanced(version, webkit_build_version, safari_build_version, sys_info) {
    return 'Mozilla/5.0 (' + get_sys_info(sys_info) + ') AppleWebKit/' + webkit_build_version + ' (KHTML, like Gecko) Version/' + version + ' Safari/' + safari_build_version;
  }
};

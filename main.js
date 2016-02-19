/* istanbul ignore next */
function get_sys_info(sys_info) {
  if (sys_info === undefined) {
    var os = require('os');
    var os_arch = os.arch();
    switch (os.platform()) {
      case 'darwin':
        return 'Macintosh; Intel Mac OS X ' + require('get-osx-version').get();
      case 'windows':
        var windows_string = 'Windows';
        if (os_arch === 'x64') {
          windows_string = windows_string + '; Win64; x64';
        } else if (os_arch === 'arm') {
          windows_string = windows_string + '; ARM';
        }
        return windows_string;
      case 'linux':
        var linux_string = 'Linux';
        if (os_arch === 'x64') {
          linux_string = linux_string + '; x86_64';
        } else if (os_arch === 'arm') {
          linux_string = linux_string + '; ARM';
        }
        return linux_string;
    }
  } else {
    return sys_info;
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
  }
};

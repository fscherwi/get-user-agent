var os = require('os');
var agent_platform;
var agent_arch;
var os_platform = os.platform();
var os_arch = os.arch();
/* istanbul ignore next */
function get_sys_info() {
  if (os_platform === 'darwin') {
    agent_platform = 'Macintosh; Intel Mac OS X ';
    agent_arch = require('get-osx-version').get();
  } else if (os_platform === 'win32') {
    agent_platform = 'Windows';
    if (os_arch === 'x64') {
      agent_arch = ' ; Win64; x64';
    } else if (os_arch === 'arm') {
      agent_arch = '; ARM';
    }
  } else if (os_platform === 'linux') {
    agent_platform = 'Linux';
    if (os_arch === 'x64') {
      agent_arch = ' x86_64';
    } else if (os_arch === 'arm') {
      agent_arch = '; ARM';
    }
  }
  return agent_platform + agent_arch;
}
module.exports = {
  chrome: function chrome(version) {
    return 'Mozilla/5.0' + ' (' + get_sys_info() + ')' + ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/' + version + ' Safari/537.36';
  },
  chrome_advanced: function chrome_advanced(version, webkit_version) {
    return 'Mozilla/5.0' + ' (' + get_sys_info() + ')' + ' AppleWebKit/' + webkit_version + ' (KHTML, like Gecko) Chrome/' + version + ' Safari/' + webkit_version;
  },
  firefox: function firefox(version) {
    return 'Mozilla/5.0' + ' (' + get_sys_info() + '; rv:' + version + ')' + ' Gecko/20100101 Firefox/' + version;
  },
  firefox_advanced: function firefox_advanced(version, gecko_version) {
    return 'Mozilla/5.0' + ' (' + get_sys_info() + '; rv:' + version + ')' + ' Gecko/' + gecko_version + ' Firefox/' + version;
  },
  opera: function opera(version) {
    return 'Opera/9.80 (' + get_sys_info() + ') Presto/2.12.388 Version/' + version;
  },
  opera_advanced: function opera_advanced(version, presto_version, opera_version) {
    return 'Opera/' + opera_version + ' (' + get_sys_info() + ') Presto/' + presto_version + ' Version/' + version;
  }
};

function getsysInfo(sysInfo) { /* istanbul ignore next */
  if (sysInfo) {
    return sysInfo;
  } else {
    var os = require("os");
    switch (os.platform()) {
      case "darwin":
        return "Macintosh; Intel Mac OS X " + require("get-osx-version").get();
      case "windows":
        switch (os.arch()) {
          case "x64":
            return "Windows; Win64; x64";
          case "x86":
            return "Windows; Win32; x86";
          case "arm":
            return "Windows; ARM";
          default:
            return "Windows";
        }
      case "linux":
        switch (os.arch()) {
          case "x64":
            return "Linux; x86_64";
          case "i686":
            return "Linux; i686";
          case "arm":
            return "Linux; ARM";
          default:
            return "Linux";
        }
    }
  }
}
module.exports = {
  chrome: function chrome(version, sysInfo) {
    return "Mozilla/5.0" + " (" + getsysInfo(sysInfo) + ")" + " AppleWebKit/537.36 (KHTML, like Gecko) Chrome/" + version + " Safari/537.36";
  },
  chromeAdvanced: function chromeAdvanced(version, webkitVersion, sysInfo) {
    return "Mozilla/5.0" + " (" + getsysInfo(sysInfo) + ")" + " AppleWebKit/" + webkitVersion + " (KHTML, like Gecko) Chrome/" + version + " Safari/" + webkitVersion;
  },
  firefox: function firefox(version, sysInfo) {
    return "Mozilla/5.0" + " (" + getsysInfo(sysInfo) + "; rv:" + version + ")" + " Gecko/20100101 Firefox/" + version;
  },
  firefoxAdvanced: function firefoxAdvanced(version, geckoVersion, sysInfo) {
    return "Mozilla/5.0" + " (" + getsysInfo(sysInfo) + "; rv:" + version + ")" + " Gecko/" + geckoVersion + " Firefox/" + version;
  },
  opera: function opera(version, sysInfo) {
    return "Opera/9.80 (" + getsysInfo(sysInfo) + ") Presto/2.12.388 Version/" + version;
  },
  operaAdvanced: function operaAdvanced(version, prestoVersion, operaVersion, sysInfo) {
    return "Opera/" + operaVersion + " (" + getsysInfo(sysInfo) + ") Presto/" + prestoVersion + " Version/" + version;
  },
  safari: function safari(version, sysInfo) {
    return "Mozilla/5.0 (" + getsysInfo(sysInfo) + ") AppleWebKit/601.4.8 (KHTML, like Gecko) Version/" + version + " Safari/601.4.8";
  },
  safariAdvanced: function safariAdvanced(version, webkitBuildVersion, safariBuildVersion, sysInfo) {
    return "Mozilla/5.0 (" + getsysInfo(sysInfo) + ") AppleWebKit/" + webkitBuildVersion + " (KHTML, like Gecko) Version/" + version + " Safari/" + safariBuildVersion;
  }
};

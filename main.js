function getsysInfo(sysInfo) {
  if (sysInfo) {
    return sysInfo;
  } else {
    return require("./sysInfo").get();
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

# get-user-agent

[![Build Status](https://travis-ci.org/fscherwi/get-user-agent.svg?branch=master)](https://travis-ci.org/fscherwi/get-user-agent) [![Coverage Status](https://coveralls.io/repos/fscherwi/get-user-agent/badge.svg?branch=master&service=github)](https://coveralls.io/github/fscherwi/get-user-agent?branch=master) [![Dependency Status](https://david-dm.org/fscherwi/get-user-agent.svg)](https://david-dm.org/fscherwi/get-user-agent)

Easily get an user agent from a browser you like!

It's an easy to use and small npm package!

## Install

```bash
npm install --save get-user-agent
```

## Example Usage

```javascript
var useragent = require('get-user-agent');

console.log(useragent.firefox(62));
```

**with custom system information**

```javascript
var useragent = require('get-user-agent');

console.log(useragent.firefox(62, 'Macintosh; Intel Mac OS X 10.14'));
```

**advanced usage**

```javascript
var useragent = require('get-user-agent');

console.log(useragent.firefoxAdvanced(version = '41.0', geckoVersion = '20100101', sysInfo = 'Macintosh; Intel Mac OS X 10.11'));
```

## API

### chrome(version, sysInfo)

**version**

Type: `String`, `Number`

**sysInfo**

Type: `String`

Default: data from system

### chromeAdvanced(version, webkitVersion, sysInfo)

**version**

Type: `String`, `Number`

**webkitVersion**

Type: `String`, `Number`

**sysInfo**

Type: `String`

Default: data from system

### firefox(version, sysInfo)

**version**

Type: `String`, `Number`

**sysInfo**

Type: `String`

Default: data from system

### firefoxAdvanced(version, geckoVersion, sysInfo)

**version**

Type: `String`, `Number`

**geckoVersion**

Type: `String`, `Number`

**sysInfo**

Type: `String`

Default: data from system

### opera(version, sysInfo)

**version**

Type: `String`, `Number`

**sysInfo**

Type: `String`

Default: data from system

### operaAdvanced(version, operaVersion, prestoVersion, sysInfo)

**version**

Type: `String`, `Number`

**operaVersion**

Type: `String`, `Number`

**prestoVersion**

Type: `String`, `Number`

**sysInfo**

Type: `String`

Default: data from system

### safari(version, sysInfo)

**version**

Type: `String`, `Number`

**sysInfo**

Type: `String`

Default: data from system

### safariAdvanced(version, webkitBuildVersion, safariBuildVersion, sysInfo)

**version**

Type: `String`, `Number`

**webkitBuildVersion**

Type: `String`, `Number`

**safariBuildVersion**

Type: `String`, `Number`

**sysInfo**

Type: `String`

Default: data from system

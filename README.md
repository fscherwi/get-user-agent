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

useragent.firefox(62);
```

**with custom system information**

```javascript
var useragent = require('get-user-agent');

useragent.firefox(62, 'Macintosh; Intel Mac OS X 10.14');
```

## API

### chrome(version, SysInfo)

**version**

Type: `String`, `Number`

**SysInfo**

Type: `String`

Default: data from system

### chromeAdvanced(version, WebkitVersion, SysInfo)

**version**

Type: `String`, `Number`

**WebkitVersion**

Type: `String`, `Number`

**SysInfo**

Type: `String`

Default: data from system

### firefox(version, SysInfo)

**version**

Type: `String`, `Number`

**SysInfo**

Type: `String`

Default: data from system

### firefoxAdvanced(version, GeckoVersion, SysInfo)

**version**

Type: `String`, `Number`

**GeckoVersion**

Type: `String`, `Number`

**SysInfo**

Type: `String`

Default: data from system

### opera(version, SysInfo)

**version**

Type: `String`, `Number`

**SysInfo**

Type: `String`

Default: data from system

### operaAdvanced(version, OperaVersion, PrestoVersion, SysInfo)

**version**

Type: `String`, `Number`

**OperaVersion**

Type: `String`, `Number`

**PrestoVersion**

Type: `String`, `Number`

**SysInfo**

Type: `String`

Default: data from system

### safari(version, SysInfo)

**version**

Type: `String`, `Number`

**SysInfo**

Type: `String`

Default: data from system

### safariAdvanced(version, WebkitBuildVersion, SafariBuildVersion, SysInfo)

**version**

Type: `String`, `Number`

**WebkitBuildVersion**

Type: `String`, `Number`

**SafariBuildVersion**

Type: `String`, `Number`

**SysInfo**

Type: `String`

Default: data from system

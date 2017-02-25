# get-user-agent

[![Build Status](https://travis-ci.org/fscherwi/get-user-agent.svg?branch=master)](https://travis-ci.org/fscherwi/get-user-agent) [![Coverage Status](https://coveralls.io/repos/fscherwi/get-user-agent/badge.svg?branch=master&service=github)](https://coveralls.io/github/fscherwi/get-user-agent?branch=master) [![Dependency Status](https://david-dm.org/fscherwi/get-user-agent.svg)](https://david-dm.org/fscherwi/get-user-agent) [![bitHound Score](https://www.bithound.io/github/fscherwi/get-user-agent/badges/score.svg)](https://www.bithound.io/github/fscherwi/get-user-agent)

Easy get an useragent from the browser you like!

It's an easy to use and small npm package!

# Install

```bash
npm install --save get-user-agent
```

# Usage

```javascript
var useragent = require('get-user-agent');

useragent.your_option(your_version);
```

## Avaible options:

- `firefox`
- `chrome`
- `opera`
- `safari`

### Example script

```javascript
var useragent = require('get-user-agent');

console.log(useragent.firefox("42.0"));
```

## Advanced options

### Custom versions

- **Chrome**

  - `version`
  - `webkit_version`

- **Firefox**

  - `version`
  - `gecko_version`

- **Opera**

  - `version`
  - `opera_version`
  - `presto_version`

- **Safari**

  - `version`
  - `webkit_build_version`
  - `safari_build_version`

#### Example

```javascript
var useragent = require('get-user-agent');

console.log(useragent.firefox_advanced(version = '41.0', gecko_version = '20100101'));
```

### Custom system information

With `sys_info` in the function call!

#### Example

```javascript
var useragent = require('get-user-agent');

console.log(useragent.firefox_advanced(version = '41.0', gecko_version = '20100101', sys_info='Macintosh; Intel Mac OS X 10.11'));
```

# get-user-agent
[![Build Status](https://travis-ci.org/fscherwi/get-user-agent.svg?branch=master)](https://travis-ci.org/fscherwi/get-user-agent) [![Coverage Status](https://coveralls.io/repos/fscherwi/get-user-agent/badge.svg?branch=master&service=github)](https://coveralls.io/github/fscherwi/get-user-agent?branch=master)

## Usage

```js
var useragent = require('useragent');

useragent.your_option(your_version);
```

### Avaible Options:
`firefox`, `chrome` and `opera`

### example script

```js
var useragent = require('useragent');

console.log(useragent.firefox("40.0"));
```

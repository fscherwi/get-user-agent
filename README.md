# get-user-agent
[![Build Status](https://travis-ci.org/fscherwi/get-user-agent.svg?branch=master)](https://travis-ci.org/fscherwi/get-user-agent) [![Coverage Status](https://coveralls.io/repos/fscherwi/get-user-agent/badge.svg?branch=master&service=github)](https://coveralls.io/github/fscherwi/get-user-agent?branch=master) [![bitHound Score](https://www.bithound.io/github/fscherwi/get-user-agent/badges/score.svg)](https://www.bithound.io/github/fscherwi/get-user-agent)

Easily get an useragent from the browser you like!

It's an easy to use and tiny npm package!

# Install

```sh
npm install --save get-user-agent
```

# Usage

```js
var useragent = require('get-user-agent');

useragent.your_option(your_version);
```

## Avaible options:
`firefox`, `chrome` and `opera`

## Example script

```js
var useragent = require('get-user-agent');

console.log(useragent.firefox("42.0"));
```

## Advanced options
- Chrome
  - version
  - webkit_version

- Firefox
  - version
  - gecko_version

- Opera
  - version
  - opera_version
  - presto_version

  ### Example

  ```js
  console.log(useragent.firefox_advanced(version = '41.0', gecko_version = '20100101'));
  ```

![Async Logo](https://raw.githubusercontent.com/vrinceanuv/devanilla/master/logo/devanilla.jpg)
We have created this library, because we know out there are lots of vanilla js in development apps, and we know that sometimes some helpers are welcomed.

devanilla purpose is to ease your way when you search for DOM elements or want to apply events to one or multiple elements, do Ajax calls, etc.

# Installing (not yet published)
```javascript
$ npm install devanilla
```

# Usage
Only the methods updated below are working properly now
```javascript
import devanilla from 'devanilla'
```
or
```javascript
const devanilla = require('devanilla')
```

# DOM Usage
Find element or elements
```javascript
const element = devanilla.find('header')
```

Add class
```javascript
const element = devanilla.find('header')
devanilla.addClass('my-class second-class', element)

//Alternative
devanilla.addClass('my-class second-class', 'header')
```

Remove class
```javascript
const element = devanilla.find('header')
devanilla.removeClass('my-class second-class', element)

//Alternative
devanilla.removeClass('my-class second-class', 'header')
```

# AJAX calls Usage
GET
```javascript
let getCall = devanilla.get('my/url');

getCall.then(function(data) {
  let receivedData = JSON.parse(data);
}, function(error) {
  console.error(error);
});
```

POST
```javascript
let postCall = devanilla.post('my/url', data, headers);

postCall.then(function(data) {
  let receivedData = JSON.parse(data);
}, function(error) {
  console.error(error);
});
```

# Contributing to it:
```javascript
$ npm install
$ npm dev       //watches for changes and run babel
```

After changes raise PRs.

**Contributing PRs will be reviewed once an initial version 1 will be released.**

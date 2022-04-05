# Pluck

## Installation
```
npm i dot-pluck
```

## Example
```
const Pluck = require('dot-pluck');

var data = {
  name: {
    first: 'john',
    last: 'doe'
  }
};

var p = Pluck.load(data);

console.log(p.get('name.first')); // john
```

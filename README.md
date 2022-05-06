# Sort

The purpose of this library is to augment the Array.prototype to provide simple sort functions that have more distinct meaning. This package offers a straightforward way to sort an array of objects according to several metrics.

## Installation

Install this package with npm.

```bash
npm install @lukasganster/sort
```

## Usage

The usage is quite simple. Just import the package and you're done.

```bash
// ES6 module
import '@lukasganster/sort'

// node.js
require('@lukasganster/sort')
```

## API

### Array.Prototype.sortBasic(order = 'asc')

Dependencies: none

A sort method for arrays that contains primitives, such as _Strings_ or _Numbers_. The parameter **order** here can be either ascending (asc) or descending (desc),

Returns a sorted array with the given order,

### Array.Prototype.sortObjects(properties = [ ])

Dependencies: none

A sort method for arrays that contains Objects. The parameter **properties** specifies the properties to be sorted by (ascending). An option to sort properties differently in ascending and descending order will follow soon.

Returns a sorted array according to the given properties.

## Usage

```js
const people = [
  { name: 'Benni', age: 20 },
  { name: 'Anna', age: 25 },
  { name: 'Pascal', age: 42 },
  { name: 'Anna', age: 20 },
  { name: 'Eva', age: 21 },
  { name: 'Michelle', age: 29 },
]

console.log(people.sortObjects(['name', 'age']))

/* Logs follwing:
  [
    { name: 'Anna', age: 20 },
    { name: 'Anna', age: 25 },
    { name: 'Benni', age: 20 },
    { name: 'Eva', age: 21 },
    { name: 'Michelle', age: 29 },
    { name: 'Pascal', age: 42 }
  ]
*/
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

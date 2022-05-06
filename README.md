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

A sort method for arrays that contains Objects. The parameter **properties** specifies the properties to be sorted by (ascending). Optionally, an object can be defined per property, which specifies the name of the property as well as the order. The example below illustrates the uncomplicated use.

Returns a sorted array according to the given properties.

## Demo

```js
const people = [
  { name: 'Benni', age: 20 },
  { name: 'Anna', age: 25 },
  { name: 'Pascal', age: 42 },
  { name: 'Anna', age: 20 },
  { name: 'Eva', age: 21 },
  { name: 'Michelle', age: 29 },
]

/////
// Multiple properties sorted in (default) ascending order

people.sortObjects(['name', 'age'])
/* Return the follwing array:
[
    { name: 'Anna', age: 20 },
    { name: 'Anna', age: 25 },
    { name: 'Benni', age: 20 },
    { name: 'Eva', age: 21 },
    { name: 'Michelle', age: 29 },
    { name: 'Pascal', age: 42 }
]
*/

/////
// Multiple properties sorted in different order

people.sortObjects([
  { property: 'name', order: 'desc' },
  { property: 'age', order: 'asc' },
])
/* Returns the following array:
[
    { name: 'Pascal', age: 42 },
    { name: 'Michelle', age: 29 },
    { name: 'Eva', age: 21 },
    { name: 'Benni', age: 20 },
    { name: 'Anna', age: 20 },
    { name: 'Anna', age: 25 }
]
*/
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

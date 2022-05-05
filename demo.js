const names = ['Bernhard', 'Zabrina', 'Anna', 'Lukas']
const people = [
  { name: 'Benni', age: 20 },
  { name: 'Anna', age: 20 },
  { name: 'Pascal', age: 42 },
  { name: 'Anna', age: 25 },
  { name: 'Eva', age: 21 },
  { name: 'Michelle', age: 29 },
]

console.log(people.sortObjects(['name', 'age']))
console.log('----')
console.log(
  people.sort((a, b) => a.name.localeCompare(b.name) || a.age - b.age),
)

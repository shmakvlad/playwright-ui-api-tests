const son = {
    name: "Alex",
    age: 43,
    job: "Dev"
}

const personEntrie = [
    ['name', 'Alex'],
    ['age', 43],
    ['job', 'Dev'],
]

console.log(Object.entries(son))
console.log(Object.fromEntries(personEntrie))
console.log(Object.fromEntries(personEntrie).job)


// Map
const maps = new Map()
const map = new Map(personEntrie)
const ent = new Map(Object.entries(son))

console.log(map)
console.log(map.get('age'))

map
  .set(son, 'My relative')
  .set('phone', '8033 144-12-22')
  .set(NaN, 'Not a Number')
  .set(2, 'two')

// console.log(map)
// console.log(map.size)
// console.log(map.delete(son))
// console.log(map.has(2))
// map.clear()

// 1 
for (let iterator of map.entries()) {
    console.log(iterator)
    console.log(iterator[0])
    console.log(iterator[1])
}

// 2
for (let [key, value] of map) {
    console.log(key, value)
}

// 3
for (let iterator of map.keys()) {
    console.log(iterator)
    console.log(map.get(iterator))
}

// 4
for (let iterator of map.values()) {
    console.log(iterator)
}

// 5
map.forEach((val, key, map) => console.log(key, val))

// 6
const array1 = [...map]
const array2 = Array.from(map)
console.log(array1)
console.log(array2)

// 7
const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)
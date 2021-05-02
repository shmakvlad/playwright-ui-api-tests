const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 8, 9, 10])

set.add(20)
   .add(30).add(20)
   .add(10).add(40)

console.log(set)
console.log(set.size)
console.log(set.delete(4))
console.log(set.has(5))
// console.log(set.clear())


console.log(set.values())
console.log(set.keys())
console.log(set.entries())

// 1
for (const iterator of set) {
    console.log(iterator)
}

// 2
set.forEach((el) => {
    console.log(el)
})

function uniqueValues(array) {
    return [...new Set(array)]          // Array.from(new Set(array))      
}

console.log(uniqueValues([0, 1, 2, 2, 3, 4, 5, 5, 5, 6, 9]));
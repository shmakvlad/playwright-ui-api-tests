const nested = ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]]
// console.log(nested.flat())
// console.log(nested.flat().flat())
// console.log(nested.flat(2))

const techs = ['react redux', 'angular', 'vue', 'deno and node']
console.log(techs.map(tech => tech.split(' ')))
console.log(techs.flatMap(tech => tech.split(' ')))

// Infinity
console.log(nested.flat(Infinity))

// Remove empty
const empty = ['a', 'b', , 'v', , ['c', 'd'], ['e', ['f', 'g']]]
console.log(empty);
console.log(empty.flat());
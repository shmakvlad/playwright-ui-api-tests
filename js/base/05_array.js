const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседс']
const people = [
  {name: 'Vladilen', budget: 4200},
  {name: 'Elena', budget: 3500},
  {name: 'Victoria', budget: 1700}
]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addItemToEnd() {
}

// Method
cars.push('Рено')
cars.unshift('Волга')

const firstCar = cars.shift()
const lastCar = cars.pop()
console.log(firstCar)
console.log(lastCar)
console.log(cars)

console.log(cars.reverse())
console.log(cars)

const index = cars.indexOf('БМВ')
cars[index] = 'Porsche'
console.log(cars)

// find
let findedPerson
for (const person of people) {
  if (person.budget === 3500) {
    findedPerson = person
  }
}
console.log(findedPerson)

const person = people.find(function(person) {
  return person.budget === 3500
})
console.log(person)

const person = people.find(person => person.budget === 3500)
console.log(person)

// findIndex
const index = people.findIndex(function(person) {
  return person.budget === 3500
})
console.log(index)

console.log(cars.includes('Мазда!'))

// map
const upperCaseCars = cars.map(car => {
  return car.toUpperCase()
})

const pow2 = num => num ** 2
const sqrt = num => Math.sqrt(num)

const pow2Fib = fib.map(pow2).map(Math.sqrt)
console.log(pow2Fib)
const pow2Fib = fib.map(pow2)
console.log(pow2Fib)

// filter
const filteredNumbers = pow2Fib.filter(num => num > 20)
console.log(filteredNumbers)

// reduce
const allBudget = people
  .filter(person => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget
    return acc
  }, 0)

console.log(allBudget)

// forEach
people.forEach(x => console.log(x))

// Ex 1
const text = 'Привет, мы изучаем JavaScript'
const reverseText = text.split('').reverse().join('')
console.log(reverseText)

// Ex 2
const arr = [1, 2, 5, 7, 12]
arr.forEach(x => console.log(x * 2))
console.log(arr.map(x => (x * 3).toString()))

// Ex 3
const arr = [1, 2, 5, 7, 12]

Array.prototype.multBy = function(n){
  return this.map(function(i){
    return i * n 
  })  
}
console.log(arr.multBy(3))

Array.prototype.multByFn = function(number) { 
  return this.map(x => x * number)
}
console.log(arr.multByFn(10))

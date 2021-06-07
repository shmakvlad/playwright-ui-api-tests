// Array
function calcValues(a, b) {
    return [
      a + b,
      a - b,
      a * b,
      a / b
    ]
  }
  
const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10)
// const [sum, , mult] = calcValues(42, 10)
console.log(sum, mult, other, sub)
  
  
// Objects
const person = {
name: 'Max',
age: 20,
address: {
    country: 'Russia',
    city: 'Moscow'
}
}


// const name = person.name
const {
name: firstName = 'Без имени',
age,
car = 'Машины нет',
address: {city: homeTown, country, phone = '8014356122'}
} = person
console.log(firstName, age, car, homeTown, country, phone)

const {name: title, ...info} = person
console.log(title, info)  

// Function
function logPerson({name: firstName = '111', age}) {
    console.log(firstName + ' ' + age)
}
  
logPerson(person)

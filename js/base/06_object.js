const person = {
  name: 'Vladilen',
  age: 26,
  isProgrammer: true,
  languages: ['ru', 'en', 'de'],
  'complex key': 'Complex Value',
  ['key_' + (1 + 3)]: 'Computed Key', 
  greet() {
    console.log('greet from person')
  },
  info() {
    console.log('this:', this)
    console.info('Информация про человека по имени:', this.name)
  }
}

console.log(person.name)
const ageKey = 'age'
console.log(person[ageKey])
console.log(person['complex key'])
person.greet()

person.age++
person.languages.push('by')
person['key_4'] = undefined
delete person['key_4']

console.log(person)
console.log(person['key_4'])

const name = person.name
const age = person.age
const languages = person.languages

const {name, age: personAge = 10, languages} = person
console.log(person)

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('key:', key)
    console.log('value:', person[key])
  }
}

Object.keys(person).forEach((key) => {
  console.log('key:', key)
  console.log('value:', person[key])
})

// Context
person.info()

const logger = {
  keys() {
    console.log('Object Keys: ', Object.keys(this))
  },

  keysAndValues() {
    // 1
    Object.keys(this).forEach(key => {
      console.log(`"${key}": ${this[key]}`)
    })

    // 2
    // const self = this

    // 3
    // Object.keys(this).forEach(function(key) {
    //   console.log(`"${key}": ${this[key]}`)
    // }.bind(this))
  },

  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log('------- Start -------')
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`"${key}": ${this[key]}`)
      if (between && index !== array.length - 1) {
        console.log('--------------')
      }
    })

    if (bottom) {
      console.log('------- End -------')
    }
  }
}

logger.keys()
logger.keys(this)
logger.keys(logger)

const bound = logger.keys.bind(person)
bound()
logger.keysAndValues.call(person)
logger.withParams.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])

// 2
const car = {
  model: 'Ford',
  year: 2019,
  color: 'red',
  countries: ['ru', 'ua', 'ch'],
  fun1: function (param) {
      console.log(param)
  },
  fun2: function () {
      console.log(this)
  },
  fun3(param) {
      console.log(param)
  },
  fun4() {
      console.log(this)
  },
  fun5: function() {
      setTimeout(() => {
          console.log(this)
          console.log(this.model)
      }, 500)
  },
  fun6: (param = 'hello') => {
      console.log(param)
  },
  [Symbol.iterator](){
    let i = 0
    return {
      next: () => {
        const val = this.countries[i]
        i++
        return {
          value: val,
          done: this.countries.length < i
        }
      } 
    }
  }
}

for (const iterator of car) {
  console.log(iterator)
}

const audi = {
  model: 'Audi',
  year: 2019
}

car.fun5()
car.fun5.call(audi)
console.log(car.model)
console.log(car['model'])
console.log(car.fun2())
console.log(car['fun2']())

class Person {
  static type = 'HUMAN'
  static #area = 'EARTH'
  name = 'unknown name'
  surname = 'unknown surname'
  #year = 1993
  #salary = 1111

  constructor(name, contacts) {
    this.name = name
    this.contacts = contacts
  }

  info(){
    console.log(this.#year)
    console.log(this.year)
    console.log(this.#personal)
    console.log(this.#privateInfo())
  }

  static printArea() {
    return Person.#area === 'EARTH' ? 'Земля' : 'Марс'
  }

  get age() {
    return new Date().getFullYear() - this.#year
  }

  set age(age) {
    if (age > 0) {
      this.#year = new Date().getFullYear() - age
    }
  }

  set year(year) {
      this.#year = year
  }

  get year() {
    return this.#year
  }

  get #personal() {
    return this.#salary
  }

  #privateInfo(){
    return [ this.year - this.#personal, this.#year - this.#salary, this.year - this.#personal, void 0 ]
  }
}

const person = new Person('Maxim', ['8017 44 55 93'])
console.log(person.name)
person.info()
console.log(person.name)
console.log(person.age)
person.age = 26
person.height = 176
console.log(person.age)
console.log(Person.type)
console.log(Person.printArea())
console.log(person)
console.log(person.age)

console.log(person.year);
person.year = 2020
console.log(person.year);

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ': ' + person[key])
  }
}

person.info()

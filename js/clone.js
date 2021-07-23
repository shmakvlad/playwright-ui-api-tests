const person = {
    _name: 'Vladilen',
    _age: 26,
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
    },
    get name(){
        return this._name;
    },
    set age(age){
        this._age = age;
    }
  }

console.log(person)


// 0 (Object.getOwnPropertyDescriptors) Cetters & Setters can correctly be copied - the most stable and right option
const correctCopy = Object.defineProperties({}, Object.getOwnPropertyDescriptors(person))
console.log(correctCopy)

// 1 (Object.assign) Cetters & Setters can not be copied
const clPerson1 = Object.assign({}, person)
console.log(clPerson1)

// 2 (Destructurization) Cetters & Setters can not be copied
const clPerson2 = { ...person }
console.log(clPerson2)


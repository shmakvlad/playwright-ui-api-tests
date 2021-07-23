console.log('I am module.js')

const privateKey = 'primate'

export const SECRET_KEY = 42

export default class Person {

  contacts = ['Minsk', 'Mavro', '12']
  #salary = 1000
  static type = 'Human'

  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }

  get salary(){
    return this.#salary
  }
}
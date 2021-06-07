// 1
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

// 2
const array = [1, 4, 6, 9, 12]
const string = 'Hello'
const it = array[Symbol.iterator]()
const itstr = string[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
// 1
const obj = {
    list: ['Nnamdi','Chidume','Ola','Kola','Trul','Hobit'],
    [Symbol.iterator]() {
        let array = this.list
        let index = 0
        return  {
            next: function() {
                if(index < array.length) {
                    return { value: array[index++], done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
}
for (const iterator of obj) {
    console.log(iterator)
}
console.log()


// 2
const createIterator = function () {
    var array = ['Nnamdi','Chidume','Ola','Kola','Trul','Hobit']
    return  {
        next: function() {
            if(this.index < array.length - 1) {
                return { value: array[this.index++], done: false }
            } else if(this.index == array.length - 1){
                return { value: array[this.index++], done: true }
            }
        },
        index: 0 
    }
}
const iterator = createIterator()
console.log(iterator.next()) // Nnamdi
console.log(iterator.next()) // Chidume
console.log(iterator.next()) 
console.log(iterator.next()) 
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) // Underfined
console.log()

// 3 Global Iterator for Objects
Object.prototype[Symbol.iterator] = function() {
    let properties = Object.keys(this)
    let count = 0
    let isdone = false
    let next = () => {
        let value = this[properties[count]]
        if (count == properties.length) {
            isdone = true
        }
        count++
        return { done: isdone, value }
    }
    return { next }
}

const car = new Object()
car.s = "SK"
car.me = 'SKODA'
for (let el of car) {
    console.log(el)
}
console.log()

const info = {
    shit: 900,
    opp: 800
}
for (let el of info) {
    console.log(el)
}
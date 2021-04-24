// 1 Create Object
const person = {
    age: 20,
    name: "Vladislav",
    greet: function () {
        console.log('Greet!')
    }
}

// 2 Create Object
const animal = new Object({
    age: 3,
    name: "Moon",
    greet: function () {
        console.log(greet)
    }
})

// Create new global function 
Object.prototype.sayHello = function(){
    console.log('Hello!')
}

// 3 Object.create
const son = Object.create(person)
son.name = 'Alex'
son.greet = function(){
    console.log('My name is', son.name)
}

for (let key in son) {
    if (son.hasOwnProperty(key)) {
        console.log('Key: ', key, ' ', 'Value: ', son[key])
    }
}

// String
const str = 'Integer'
const strobj = new String('Double')

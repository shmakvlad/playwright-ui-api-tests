// Function, Array

function sum(a, b, ...rest) {               // Rest
    return a + b + rest.reduce((acc, i) => acc + i, 0)
}

const numbers = [1, 2, 3, 5, 8, 13]
console.log(sum(1, 2, 3, 4, 5))
console.log(sum(...numbers))                // Spread

const [a, b, ...others] = numbers           // Spread
console.log(a, b, others)
console.log(a, b, ...others)    


// Object
const son = {
    name: "Alex",
    age: 43,
    job: "Dev",
    city: "Praha"
}
console.log(son)
console.log(Object.entries(son))
console.log(...Object.entries(son))

const {n, ag} = son
console.log(n, a)

const {name, age, ...contacts} = son
console.log(name, age, contacts)
console.log(name, age, Object.values(contacts))
console.log(name, age, ...Object.values(contacts))



// Practice
Object.keys(contacts).forEach(key => {
    if(contacts.hasOwnProperty(key)){
        console.log(contacts[key])
    }
})
console.log(...Object.values(contacts))
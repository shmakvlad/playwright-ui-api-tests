const person = Object.create({
    calculateAge(){
        console.log(new Date().getFullYear() - this.birthYear)
    }
},{
    name: {
        value: 'Vladimir',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1994,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get(){
            return new Date().getFullYear() - this.birthYear
        },
        set(value){
            document.body.style.backgroundColor = value
            console.log('Set color: ', value)
        }
    }
})

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key: ', key, ' ', 'Value: ', person[key])
    }
}
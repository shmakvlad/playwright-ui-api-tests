// Context
function hello(){
    console.log('Hello World!', this)
}
hello()
window.hello()


const person = {
    age: 20,
    name: "Vladislav",
    sayHello: hello,
    sayHelloWindow: hello.bind(this), // or Empty, this - объект window
    sayHelloContext: hello.bind(document),
    logInfo: function(){ 
        console.group(`${this.name} info:`) // this - является объектом person, потому что функция создана в контексте этого объекта.
        console.log(`My name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.groupEnd()
    },
    fullLogInfo: function(job, phone){ 
        console.group(`${this.name} info:`) 
        console.log(`My name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone number: ${phone}`)
        console.groupEnd()
    }
}
person.logInfo()  

const son = {
    name: "Alex",
    age: 43
}


// bind
// 1
person.logInfo.bind(son)()   

// 2
const sonBound = person.logInfo.bind(son)
sonBound()   

// 3 
const fullSonBound1 = person.fullLogInfo.bind(son, 'Developer', '444-12-23')
fullSonBound1()

// 4 
const fullSonBound2 = person.fullLogInfo.bind(son)
fullSonBound2('QA Engineer', '555-66-77')


// call
person.fullLogInfo.call(son, 'Call', '213-00-15')


// apply
person.fullLogInfo.apply(son, ['Apply', '999-44-02'])


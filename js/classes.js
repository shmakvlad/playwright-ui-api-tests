class Animal{

    static type = 'ANIMAL'

    constructor(options){
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice(){
        console.log('Hello, i am Animal!')
    }
}

class Cat extends Animal{

    static type = 'CAT'

    constructor(options){
        super(options)
        this.color = options.color
    }

    voice(){
        super.voice()
        console.log('Hello, i am Cat!')
    }

    get getAge(){
        return this.age
    }

    set setAge(value){
        this.age = value
    }

    getAnimalAge(){
        return this.age
    }

    async getName(){
        return await this.name
    }

    static async getHasTail(){
        return await this.hasTail
    }
}

const cat = new Cat({
    name: 'Roman',
    age: 8,
    hasTail: true,
    color: 'black'
});
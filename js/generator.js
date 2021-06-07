// 1
function* numGenerator(count = 10) {
    for (let i = 0; i < count; i++) {
        yield i
    }
}

const num = numGenerator(11)
num.next()
num.next()

// 2
const iterator = {
    gen(count = 10){
        let i = 0
        return { 
            next() {
                if (i < count) {
                    return {value: i++, done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
}

const itr = iterator.gen(8)
itr.next()
itr.next()

// 3
function* iter(count = 10) {
    for (let i = 0; i < count; i++) {
        yield i
    }
}

for (const iterator of iter(14)) {
    console.log(iterator)
}

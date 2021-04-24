// Promise
console.log('Start processing...');

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Up...');
        const obj = {
            length: '20px',
            width: '40px'
        }
        resolve(obj)
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.size = 25
            resolve(data)
        }, 3000)
    })
}).then(data => {
    data.name = 'css'
    return data
}).then(data => {
    console.log('Object: ', data);
}).catch(err => {
    console.log(err)
}).finally(() => console.log('Down...'))

console.log('Stop processing...');


// Promise.all , Promise.rase
const sleep = timeout => {
    return new Promise(resolve => {
        setTimeout(() => { 
            console.log('After: ' , timeout) 
            resolve()
        }, timeout)
    })
}

sleep(2000).then(() => console.log('Sleep afer 2 seconds'))
sleep(3000).then(() => console.log('Sleep afer 3 seconds'))

// Executed after all
Promise.all([sleep(2000), sleep(5000)])
    .then(() => console.log('After all promises'))

// Executed after first
Promise.race([sleep(1500), sleep(5000)])
    .then(() => console.log('After first promise'))

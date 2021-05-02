// Promise
console.log('Start processing...');

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Up...');
        const obj = {
            length: '25px',
            width: '40px'
        }
        resolve(obj)
    }, 1000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        if (data.length  === '20px') {
            setTimeout(() => {
                data.size = 25
                resolve(data)
            }, 3000)
        } else {
            reject(data)
        }
    })
}).then((onfulfilled, onrejected) => {
    if(onfulfilled){
        onfulfilled.name = 'css'
        return onfulfilled
    } else {
        return onrejected
    }
}).then(data => {
    console.log('Object: ', data);
}).catch(err => {
    console.log('Error: ', err)
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

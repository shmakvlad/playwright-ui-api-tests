const sleep = timeout => {
    return new Promise(resolve => setTimeout(() => resolve(), timeout))
}

const url = 'https://jsonplaceholder.typicode.com/todos'

function fetchUrl() {
    console.log('Start...')
    return sleep(2000)
        .then(() => fetch(url))
        .then(response => response.json())
}


// 1
fetchUrl().
    then(data => console.log('Data: ' , data))
    .catch(err => console.error('Error: ' , err))
    .finally(() => console.log('Stop...'))


// 2
async function fetchAsyncUrl() {
    console.log('Start processing...');
    try{
        await sleep(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data: ', data)
    } catch(error) {
        console.log('Error: ', error);
    } finally {
        console.log('Stop processing...');
    }
}

fetchAsyncUrl()
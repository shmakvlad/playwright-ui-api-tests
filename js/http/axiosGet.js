const axios = require('axios')


// Enviroment variables
const url = 'https://api-demo.affise.com'
const urlPath = '/3.0/admin/users'

const instance = axios.create({
    baseURL: url,
    url: urlPath,
    responseType: 'json',
    timeout: 1000,
    responseEncoding: 'utf8',
    headers: {'api-key': 'fe21ba24b1d1c1665af58cd3154b8505'}
})

const config = {
    baseURL: url,
    headers: {'api-key': 'fe21ba24b1d1c1665af58cd3154b8505'}
}

// 1 Get users
axios
    .get(urlPath, {
        baseURL: 'https://api-demo.affise.com',
        headers: {
            'api-key': 'fe21ba24b1d1c1665af58cd3154b8505'
        },
        params: {
            'limit': 2,
            'q': 'demo'
        }
    })
    .then(response => console.log(response.data))
    .catch(error => 
        console.log(`Error: ${error.response.status} ${error.response.statusText}`, error.response.data))
    .then(data => {
        console.log('Finally: ', data?.data)
    })

// 2 Get users only with config
axios({
        baseURL: 'https://api-demo.affise.com',
        url: '/3.0/admin/users',
        method: 'get',
        headers: {
            'api-key': 'fe21ba24b1d1c1665af58cd3154b8505'
        },
        params: {
            'limit': 2,
            'q': 'demo'
        }
    })
    .then(response => {
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.data);
        console.log(response.config);
    })
    .catch(error => {
        console.log(`Error: `, error)
    })
    .then(data => {
        console.log('Finally: ', data?.data)
    })

// 3 async await syntax
async function getUsers() {
    try {
      console.log('Start fetch users: ')
      const response = await axios.get(urlPath, config);
      console.log(response.data);
      console.log('End fetch users')
    } catch (error) {
      console.error(error);
    }
}
getUsers()

// 4 With instance
instance.request()
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

instance.get(urlPath)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

// 5 With config
axios
    .get(urlPath, config)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

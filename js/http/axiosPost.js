const axios = require('axios')
const faker = require('faker')
var qs = require('qs')
const querystring = require('querystring')
const FormData = require('form-data');


axios.defaults.baseURL = 'https://api-demo.affise.com'

// Enviroment variables
const url = undefined
const urlPath = '/3.0/admin/user'

const instance = axios.create({
    baseURL: url,
    url: urlPath,
    responseType: 'json',
    timeout: 1000,
    responseEncoding: 'utf8',
    headers: {
        'api-key': 'fe21ba24b1d1c1665af58cd3154b8505',
        'Content-Type': 'application/x-www-form-urlencoded'     
        // or 'multipart/form-data'
    },
    transformRequest: [function(data) {
        return qs.stringify(data);
    }],
    data: {
        email: faker.internet.email()
    }
})

const config = {
    baseURL: url || axios.defaults.baseURL,
    url: urlPath,
    transformRequest: [function(data) {
        return querystring.stringify(data);
    }],
    headers: { 'api-key': 'fe21ba24b1d1c1665af58cd3154b8505' }
}


// 1 Post (querystring)
axios.post(urlPath, {
    password: 123456,
    email: faker.internet.email(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    'roles[]': [ 'ROLE_ADMIN' , 'ROLE_MANAGER_AFFILIATE' ]
}, config)
    .then(response => console.log(response.data))
    .catch(error =>
        console.log(error.response.status, error.response.statusText, error.response.data))
    .then(data => {
        console.log('Finally: ', data?.data)
    })

// 2 Post (qs)
axios.post(urlPath, qs.stringify({
        password: 123456,
        email: faker.internet.email(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        roles: [ 'ROLE_ADMIN' , 'ROLE_MANAGER_AFFILIATE' ]
    }), {
        headers: { 'api-key': 'fe21ba24b1d1c1665af58cd3154b8505' }
    })
    .then(response => console.log(response.data))
    .catch(error =>
        console.log(error))

// 3 Post (Form-data)
const form = new FormData();
form.append('password', 123456)
form.append('email', faker.internet.email())
form.append('first_name', faker.name.firstName())
form.append('last_name', faker.name.lastName())
form.append('roles[]', 'ROLE_ADMIN')
form.append('roles[]', 'ROLE_MANAGER_AFFILIATE')

axios.post(urlPath, form, {
        headers: { 
            'api-key': 'fe21ba24b1d1c1665af58cd3154b8505',
            ...form.getHeaders()                            
            // or set 'Content-Type': `multipart/form-data; boundary=${form._boundary}`
        }
    })
    .then(response => console.log(response.data))
    .catch(error =>
        console.log(error))


// Example 1
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     },
//     auth: {
//         username: 'janedoe',
//         password: 's00pers3cret'
//     }
// })

// Example 2
// function getUserAccount() {
//     return axios.get('/user/12345');
// }
  
// function getUserPermissions() {
//     return axios.get('/user/12345/permissions');
// }
  
// Promise.all([getUserAccount(), getUserPermissions()])
//     .then(function (results) {
//         const acct = results[0];
//         const perm = results[1];
// })

// Help for qs module (How to transfer Array of objects)
// var arraysOfObjects = qs.parse('a[][b]=c');
// assert.deepEqual(arraysOfObjects, { a: [{ b: 'c' }] });

// Help for qs module (How Arrays can be transfer )
// roles: {
//     0: 'ROLE_ADMIN',
//     1: 'ROLE_MANAGER_AFFILIATE'
// }
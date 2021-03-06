const requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    const headers = {
        "Content-Type": "application/json"
    }

    const init = {
        method: method,
        headers: headers
    }

    if (body !== null) init.body = JSON.stringify(body)
    
    return fetch(url, init).then((response) => {
        if (response.ok) {
            return response.json()
        }
        return response.json().then((error) => {
            const e = new Error("Что-то пошло не так")
            e.data = error
            throw e
        })
    })
}

// GET request
sendRequest("GET", requestURL)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// POST request
const body = {
  name: 'Vladilen',
  age: 26
}

sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))

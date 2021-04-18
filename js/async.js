// Call stack, Outside api (web api, server api), Event loop (callback queue)

console.log('Start');

console.log('Continue');

setTimeout(() => {
    console.log('Multiplying after 5 seconds');
}, 5000)

setTimeout(function() {
    console.log('Dividing after 2 seconds');
}, 2000)

console.log('End');
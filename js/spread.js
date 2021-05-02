// Array
const citiesInRussia = ['Москва', 'Казань', 'Санкт-Петербург']
const citiesInEurope = ['Мюнхен', 'Варшава']

const allSities = [...citiesInEurope, 'Прага', ...citiesInRussia]

console.log(citiesInRussia)
console.log(...citiesInRussia)
console.log([...citiesInRussia])
console.log(allSities)


// Object
const citiesInRussiaWithPopulation = {
    Moscow: 20,
    SaintPeterburg: 8,
    Kazan: 3
}

const citiesInEuropeWithPopulation = {
    Paris: 9,
    Praha: 5,
    Kazan: 19
}

console.log(citiesInEuropeWithPopulation)
const cities = { ...citiesInEuropeWithPopulation }
console.log('Cities: ', cities)
console.log({...citiesInEuropeWithPopulation, ...citiesInRussiaWithPopulation})


// Practice

// 1
const numbers = [1, 2, 6, 3, 4]
console.log(Math.max(1, 5, 10, 4))
console.log(Math.max(...numbers))

// 2
const divs = document.querySelectorAll('div')
const nodes = [...divs]                         // nodes - is array => more methods for work (map()...)
console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))
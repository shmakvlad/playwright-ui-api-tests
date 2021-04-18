function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comDomain = urlGenerator('com')
const ruDomain = urlGenerator('ru')

console.log(comDomain('google'))
console.log(ruDomain('yandex'))

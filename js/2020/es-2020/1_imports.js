(async () => {
  const module = await import('./module.js')
  console.log(module)
  console.log(module.SECRET_KEY)

  const Person = module.default
  
  const person = new Person('Max', 'Ivanov')
  console.log(person)
  console.log(Person.type)
  console.log(person.name)
  console.log(person.contacts)
  console.log(person.salary)
})()  
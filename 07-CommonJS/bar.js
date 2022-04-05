let name = 'kobe'
const age = 18

function sayHello(name) {
  console.log('Hello ' + name)
}

setTimeout(() => {
  console.log(name, 'bar') // kobe bar
}, 5000)

exports.name = name
exports.age = age
exports.sayHello = sayHello

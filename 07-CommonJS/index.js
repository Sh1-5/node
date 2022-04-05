const bar = require('./bar')
console.log(bar.name) // kobe
console.log(bar.age) // 18
bar.sayHello(bar.name) // Hello kobe

setTimeout(() => {
  bar.name = 'james'
  console.log(bar.name, 'index') // james index
}, 2000)

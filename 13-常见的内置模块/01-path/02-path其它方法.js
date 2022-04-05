const path = require('path')

const filepath = '/User/kobe/demo.txt'

console.log(path.basename(filepath))
console.log(path.dirname(filepath))
console.log(path.extname(filepath))
console.log(path.join(filepath, '/demo.png'))
console.log(path.resolve(filepath, '/demo.png'))

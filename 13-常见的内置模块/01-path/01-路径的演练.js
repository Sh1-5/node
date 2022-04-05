const basePath = '/User/kobe'
const filename = 'demo.txt'

// const filepath = basePath + '/' + filename // 有的操作系统是 \
// console.log(filepath) // /User/kobe/demo.txt

const path = require('path')
const filepath = path.resolve(basePath, filename)
console.log(filepath) // /User/kobe/demo.txt

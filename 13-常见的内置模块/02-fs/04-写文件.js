const fs = require('fs')

const filepath = './abc.txt'

// 1.同步
const err = fs.writeFileSync(filepath, 'write', {})
console.log(err)

// 2.异步
fs.writeFile(filepath, 'write', {}, (err) => {
  if (err) {
    console.log(err)
  }
})

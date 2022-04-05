const fs = require('fs')

const filepath = './abc.txt'

// 同步
const data = fs.readFileSync(filepath, { encoding: 'utf-8' })
console.log(data)

// 异步
fs.readFile(filepath, { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

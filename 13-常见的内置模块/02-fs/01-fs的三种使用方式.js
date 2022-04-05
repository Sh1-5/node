const fs = require('fs')

const filepath = './abc.txt'

// 1.同步操作
// const info = fs.statSync(filepath)
// console.log('后续需要执行的代码')
// console.log(info)

// 2.异步操作
// fs.stat(filepath, (err, stats) => {
//   console.log(stats)
// })
// console.log('后续需要执行的代码')

// 3.Promise
fs.promises.stat(filepath).then((res) => {
  console.log(res)
})

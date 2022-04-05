const fs = require('fs')

// 1.创建文件夹
const dirname = './mkdir-demo'
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, (err) => {
    console.log(err)
  })
}

// 2.读取文件夹中的所有文件
const dir = './readdir-demo'
fs.readdir(dir, (err, files) => {
  if (err) {
    console.log(err)
  } else {
    console.log(files)
  }
})

// 3.文件夹的重命名
const oldPath = './rename'
fs.rename(oldPath, 'rename-demp', (err) => {
  console.log(err)
})

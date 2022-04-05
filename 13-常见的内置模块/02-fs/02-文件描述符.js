const fs = require('fs')

fs.open('./abc.txt', (err, fd) => {
  if (err) {
    console.log(err)
  } else {
    fs.fstat(fd, (err, stats) => {
      if (err) {
        console.log(err)
      } else {
        console.log(stats)
      }
    })
  }
})

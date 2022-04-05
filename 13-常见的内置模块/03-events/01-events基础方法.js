const EventEmitter = require('events')

// 1.创建发射器
const emitter = new EventEmitter()

// 2.监听事件
const listener = (args) => {
  console.log('监听到click事件', args)
}
emitter.on('click', listener)

// 3.发射事件
emitter.emit('click', ['Hello', 'emitter'])

// 4.关闭监听
emitter.off('click', listener)
emitter.emit('click', 'World')

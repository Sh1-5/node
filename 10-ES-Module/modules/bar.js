// export const name = 'bar'

const name = 'bar'
export { name } // 这是一个大括号，不是对象

// const name = 'bar'
// export { name as barName }

export { name as fooName } from './foo.js'

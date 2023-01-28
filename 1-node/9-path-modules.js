const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolutePath = path.resolve(__dirname, 'content', 'text.txt')
console.log(absolutePath)
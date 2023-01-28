const http = require('http')

// // Earlier -
// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })

// Using EVENT EMITTER API
const server = http.createServer()
server.on('request', (req, res) => {
    res.end('welcome')
})
const http = require('http')

const server = http.createServer((req, res) => {
    console.log('Request event')
    res.end('Hello World')
})

server.listen(4000, () => {
    console.log('Server is listening on port: 4000 ...')
})
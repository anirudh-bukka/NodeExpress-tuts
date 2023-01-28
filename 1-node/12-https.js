const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req)
//     res.write('Welcome to our home page')
//     res.end()
// })

// server.listen(5001)

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to the home page')
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to the find the page you are looking for.</p>
        <a href="/">Back Home.</a>
    `)
}) 

server.listen(4000)
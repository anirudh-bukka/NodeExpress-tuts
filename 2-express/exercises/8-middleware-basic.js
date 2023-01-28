const express = require('express')
const app = express()
// req => res
// But now, req => middleware => res

const logger = (req, res, next) => {44
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

app.get('/', (req, res) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    res.send('Home')
})

app.get('/about', logger, (req, res) => {
    res.send('About Page')
})

app.listen(4000, () => {
    console.log('Server is listening on port 4000 ...')
})
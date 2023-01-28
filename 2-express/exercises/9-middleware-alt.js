const express = require('express')
const app = express()
const middlewareFunc = require('./middleware-func')

app.get('/', middlewareFunc, (req, res) => {
    res.send('Home')
})

app.get('/about', middlewareFunc, (req, res) => {
    res.send('About')
})

app.get('/api/products', middlewareFunc, (req, res) => {
    res.send('All products')
})

app.get('/api/items', middlewareFunc, (req, res) => {
    res.send('All items')
})

app.listen(4000, () => {
    console.log('Server is listening on port 4000 ...')
})
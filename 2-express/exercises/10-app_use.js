const express = require('express')
const app = express()
const middlewareFunc = require('./middleware-func')

// ***********************
app.use(middlewareFunc)
// ***********************

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('All products')
})

app.get('/api/items', (req, res) => {
    res.send('All items')
})

app.listen(4000, () => {
    console.log('Server is listening on port 4000 ...')
})
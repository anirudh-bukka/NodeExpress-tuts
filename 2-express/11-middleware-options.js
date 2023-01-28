const express = require('express')
const app = express()
const morgan = require('morgan')
const middlewareFunc = require('../2-express/exercises/middleware-func')
const authorize = require('./authorize')

// ***********************
// app.use([middlewareFunc, authorize]) // ORDER IS IMPORTANT
// ***********************
// app.use(express.static('./navbar_app-public'))
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', [middlewareFunc, authorize], (req, res) => {
    res.send('All products')
})

app.get('/api/items', (req, res) => {
    res.send('All items')
})

app.listen(4000, () => {
    console.log('Server is listening on port 4000 ...')
})
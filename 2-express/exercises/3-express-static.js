const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./navbar_app-public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('Resource not found.')
})

app.listen(4000, () => {
    console.log('App is listening on port 4000 ...')
})
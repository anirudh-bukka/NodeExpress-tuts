const express = require('express')
const app = express()
let { people } = require('../data')

// ********************************************************
// MIDDLEWARE
// static assets
app.use(express.static('../methods-public'))

// Parse form data -- THIS MIDDLEWARE is going to parse the data and add the values to `req.body`. 
    // parses incoming requests with URL and encoded payloads
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// ********************************************************

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if(!name) {
        return res.status(400).json({ success: false, message: 'Please provide a name'})
    }
    res.status(201).json({ success: true, person: name })
})

app.post('/login', (req, res) => {
    // console.log(req.body)
    // res.send('POST ')
    const { name } = req.body
    if(name) {
        return res.status(200).send(`Welcome ${name}.`)
    }
    res.status(401).send('Please provide your credentials.')
})

// app.post('/api/postman/people', (req, res) => {
//     const { name } = req.body
//     if(!name) {
//         return res.status(400).json({ success: false, message: 'Please provide name value' })
//     }
//     res.status(201).send({ success: true, data: [...people, name] })
// })

// app.put('/api/people/:id', (req, res) => {
//     const { id } = req.params
//     const { name } = req.body
//     // console.log(id, name)
//     // res.send('Hello World')
//     const person = people.find((peron) => person.id === Number(id))
//     if(!person) {
//         return res.status(404).json({ success: false, msg: `No person with id ${id}` })
//     }
//     const newPeople = people.map((person) => {
//         if(person.id === Number(id)) {
//             person.name = name
//         }
//         return person
//     })
//     res.status(200).json({ success: true, data: newPeople })
// })

app.post('/api/people/postman', (req, res) => {
    const { name } = req.body
    if(!name) {
        return res.status(400).json({ success: false, message: 'Please provide a name.' })
    }
    res.status(201).send({ success: true, data: [...people, name] })
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if(!person) {
        return res.status(404).json({ success: false, message: `No person with id ${id} exists.` })
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person) {
        return res.status(404).json({ success: false, message: `No person with id ${id} exists.` })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople })
})

app.listen(4000, () => {
    console.log('Server is listening on port 4000 ...')
})

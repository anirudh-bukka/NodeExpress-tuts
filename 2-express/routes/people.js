const express = requier('express')
const router = express.Router()

let { people } = require('../data')

router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
}) 

router.post('/', (req, res) => {
    const { name } = req.body
    if(!name) {
        return res.status(400).json({ success: false, message: 'Please provide a name.' })
    }
    res.status(201).send({ success: true, person: name })
})

router.post('/postman', (req, res) => {
    const { name } = req.body
    if(!name) {
        return res.status(400).json({ success: false, message: 'Please provide a name.' })
    }
    res.status(201).send({ success: true, data: [...people, name] })
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person) {
        return res.status(404).json({ success: false, message: `No person with id ${id} exists.` })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople })
})

module.exports = router
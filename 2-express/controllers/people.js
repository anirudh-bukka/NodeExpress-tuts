const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
    const { name } = req.body
    if(!name) {
        return res.status(400).json({ success: false, message: 'Please provide name' })
    }
    res.status(201).send({ success: true, person: name })
}

const createPersonPostman = (req, res) => {
    
}
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const PORT = 3001

morgan.token('data', req => JSON.stringify(req.body))

app.use(express.json())

app.use(cors())

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :data')
)

// Load the raw data
let persons = [
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '48423008490234',
    id: 3
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4
  },
  {
    name: 'Arttu Matilainen',
    number: '0401742069',
    id: 5
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Phonebook</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  let body = `<p> Phonebook has info for ${
    persons.length
  } people</p> <p>${new Date().toString()}</p>`
  res.send(body)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  person ? res.json(person) : res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number is missing'
    })
  }

  const index = persons.indexOf(
    persons.find(person => person.name === body.name)
  )

  if (index !== -1) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 999999)
  }
  persons = persons.concat(person)

  res.json(person)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

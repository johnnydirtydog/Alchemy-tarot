const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { generate } = require('./oracle.logic')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/oracle', (req, res) => {
  const { name, birthdate, cards } = req.body
  const reading = generate(name, birthdate, cards)
  res.json(reading)
})

app.listen(3000, () => console.log('Fusion Oracle running on port 3000'))

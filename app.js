const express = require('express')
const cors = require('cors')

const indexRouter = require('./routes/index')
const pokemonRouter = require('./routes/pokemon')

const app = express()

app.use(cors())

app.use(indexRouter)
app.use(pokemonRouter)

module.exports = app
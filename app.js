const express = require('express')
const cors = require('cors')

const indexRouter = require('./routes/index')
const pokemonRouter = require('./routes/pokemon')

const errorMiddleware = require('./middleware/error')

const app = express()

app.use(cors())

app.use(indexRouter)
app.use(pokemonRouter)

app.use(errorMiddleware)

module.exports = app
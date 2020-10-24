const express = require('express')
const axios = require('axios')

const handlers = require('./handlers')

const pokemon = express.Router()

pokemon.get('/pokemon/:id/', async (req, res) => {
    const { id } = req.params
    const requestIntent = handlers.consumePokemonEntry(id)
    const response = await axios(requestIntent)
    const jsonIntent = handlers.returnPokemonEntry(response.data)

    res.status(jsonIntent.status)
        .json(jsonIntent.json)
})

module.exports = pokemon
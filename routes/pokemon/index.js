const express = require('express')
const axios = require('axios')

const handlers = require('./handlers')
const { HttpError } = require('../../util/error')

const pokemon = express.Router()

pokemon.get('/pokemon/:id/', async (req, res, next) => {
    const { id } = req.params
    const requestIntent = handlers.consumePokemonEntry(id)

    try {
        const response = await axios(requestIntent)
        res.json(handlers.returnPokemonEntry(response.data).json) 
    } catch (err) {
        next(new HttpError(err.message, err.response.status))
    }     
})

module.exports = pokemon
const express = require('express')
const axios = require('axios')
const http = require('http')

const handlers = require('./handlers')
const { JSONIntent } = require('../../util/intent')

const pokemon = express.Router()

pokemon.get('/pokemon/:id/', async (req, res) => {
    const { id } = req.params
    const requestIntent = handlers.consumePokemonEntry(id)

    let jsonIntent;
    try {
        const response = await axios(requestIntent)
        jsonIntent = handlers.returnPokemonEntry(response.data)
    } catch (error) {
        const { status } = error.response
        jsonIntent = JSONIntent(status, {
            title: http.STATUS_CODES[status],
            status,
        })
        res.type('application/problem+json') 
    }     

    res.status(jsonIntent.status)
        .json(jsonIntent.json)
})

module.exports = pokemon
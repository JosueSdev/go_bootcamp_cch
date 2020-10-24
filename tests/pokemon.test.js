const supertest = require('supertest')

const pokemonHandlers = require('../routes/pokemon/handlers')
const examplePokemon = require('./resources/greninja.json')
const app = require('../app')

const request = supertest(app)

describe('GET /pokemon/:id', () => {
    it('intends to consume a Pokémon', () => {
        const id = '151'
        const requestIntent = pokemonHandlers.consumePokemonEntry(id)

        expect(requestIntent).toStrictEqual({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon-species/151/',
        })
    })

    it('intends to return the Pokemon data', () => {
        const jsonIntent = pokemonHandlers.returnPokemonEntry(examplePokemon)

        expect(jsonIntent.status).toStrictEqual(200)

        expect(jsonIntent.json).toHaveProperty('name', 'greninja')
        expect(jsonIntent.json).toHaveProperty('nationalPokedexNumber', 658)
        expect(jsonIntent.json).toHaveProperty(
            'description',
            'It creates throwing stars out of compressed water.\nWhen it spins them and throws them at high speed,\nthese stars can split metal in two.',
        )
    })

    it('retireves a valid Pokémon request', async (done) => {
        const response = await request
            .get('/pokemon/151/')
        
        expect(response.status).toStrictEqual(200)

        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('nationalPokedexNumber', 151)
        expect(response.body).toHaveProperty('description')

        done()
    })
})
const { JSONIntent, RequestIntent } = require('../../util/intent')

const pokemonAPI = 'https://pokeapi.co/api/v2'

function consumePokemonEntry(id) {
    return RequestIntent(
        'GET',
        `${pokemonAPI}/pokemon-species/${id}/`,
    )
}

function returnPokemonEntry(data) {
    const pokemon = {}

    pokemon.name = data.name
    pokemon.nationalPokedexNumber = data.pokedex_numbers.find(entry => entry.pokedex.name === 'national').entry_number
    pokemon.description = data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text

    return JSONIntent(200, pokemon)
}

module.exports = {
    consumePokemonEntry,
    returnPokemonEntry,
}
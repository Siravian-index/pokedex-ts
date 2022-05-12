import { firstResponse, result } from './../types/pokeapi'
// {id, name, type, description, stats, pokedexOrder, weight, height}
// {id, name, type, image, }

// const POKE_API = 'https://pokeapi.co/api/v2/pokemon/'
const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

export const getAllPokemon = async () => {
  const res = await fetch(POKE_API)
  const { result }: firstResponse = await res.json()
  const allData = await getSinglePokemonInfo(result)
}

export const getSinglePokemonInfo = async (pokemonList: result[]) => {}

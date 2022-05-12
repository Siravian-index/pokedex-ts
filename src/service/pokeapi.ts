import { firstResponse, results, singlePokemonDetails } from './../types/pokeapi'

// const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=151'
const POKE_API = 'https://pokeapi.co/api/v2/pokemon?limit=10'

export const getAllPokemon = async () => {
  const res = await fetch(POKE_API)
  const { results }: firstResponse = await res.json()
  const pokemonArr = await getSinglePokemonInfo(results)
}

export const getSinglePokemonInfo = async (pokemonList: results[]) => {
  const fullPokemonInfo = [] as singlePokemonDetails[]
}

// const buildPokemonObj = (): singlePokemonDetails => {}

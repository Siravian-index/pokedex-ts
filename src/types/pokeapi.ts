export type results = { name: string; url: string }
type strOrNull = string | null

// response shape from api
export interface firstResponse {
  count: number
  next: strOrNull
  previous: strOrNull
  results: results[]
}

// single pokemon data to be display on detail
type stats = { stat: number; name: string }
type types = { name: string }
export type singlePokemonDetails = {
  id: number
  name: string
  stats: stats[]
  weight: number
  height: number
  image: string
  type: types[]
}

// all pokemon data to be display on list

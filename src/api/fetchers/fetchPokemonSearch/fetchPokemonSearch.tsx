import { PokemonDetail } from '@/api/types/PokemonDetail'
import pokeApiFetch from '@/api/utils/pokeapiFetch/pokeApiFetch'

/** *"Fake search"* Its must match perfectly because pokeapi doesnt provide a search endpoint.
 * Returns the detail of one Pokemon
 */
const fetchPokemonSearch = async (query: string): Promise<PokemonDetail> => {
  const res = await pokeApiFetch(`/pokemon/${query}`)
  return res.json()
}

export default fetchPokemonSearch

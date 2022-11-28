import { PokemonList } from '@api/types/PokemonList'
import pokeApiFetch from '@api/utils/pokeapiFetch/pokeApiFetch'

/**
 * Return the Pokemon list paginated
 * @param pageNum Page number (starts from 0, default `0`)
 * @param pageSize Number of Pokemons per page (default `15`)
 */
const fetchPokemons = async (
  pageNum = 0,
  pageSize = 15
): Promise<PokemonList> => {
  const offset = pageNum * pageSize
  const res = await pokeApiFetch(`/pokemon?offset=${offset}&limit=${pageSize}`)
  return res.json()
}

export default fetchPokemons

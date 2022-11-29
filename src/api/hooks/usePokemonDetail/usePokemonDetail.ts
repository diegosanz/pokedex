import fetchPokemonSearch from '@api/fetchers/fetchPokemonSearch/fetchPokemonSearch'
import { useQuery } from '@tanstack/react-query'

const usePokemonDetail = (pokemonName: string) => {
  const query = useQuery({
    queryKey: ['pokemonSearch', pokemonName],
    queryFn: () => fetchPokemonSearch(pokemonName),
    enabled: !!pokemonName,
  })

  return query
}

export default usePokemonDetail

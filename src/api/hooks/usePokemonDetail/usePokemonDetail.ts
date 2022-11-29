import { RETRY_COUNT_DEFAULT } from '@/api/contants/retryCountDefault'
import fetchPokemonSearch from '@/api/fetchers/fetchPokemonSearch/fetchPokemonSearch'
import isNotFoundError from '@/api/utils/isNotFoundError/isNotFoundError'
import { useQuery } from '@tanstack/react-query'

const usePokemonDetail = (pokemonName: string) => {
  const query = useQuery({
    queryKey: ['pokemonSearch', pokemonName],
    queryFn: () => fetchPokemonSearch(pokemonName),
    enabled: !!pokemonName,
    retry: (failureCount, error) => {
      return isNotFoundError(error) ? false : failureCount < RETRY_COUNT_DEFAULT
    },
  })

  return { ...query, isNotFound: isNotFoundError(query.error) }
}

export default usePokemonDetail

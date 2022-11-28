import fetchPokemons from '@api/fetchers/fetchPokemons/fetchPokemons'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const usePokemonList = (defaultPage = 0) => {
  const [page, setPage] = useState(defaultPage)
  const query = useQuery(['pokemonList', page], () => fetchPokemons(page))

  return {
    page,
    setPage,
    hasPrevious: query.data?.previous,
    hasNext: query.data?.next,
    ...query,
  }
}

export default usePokemonList

import fetchPokemons from '@api/fetchers/fetchPokemons/fetchPokemons'
import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

const PokemonList: FC = () => {
  const [page, setPage] = useState(0)
  const { data, isLoading, error } = useQuery(['pokemonList', page], () =>
    fetchPokemons(page)
  )

  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <>An error has occurred</>
  }

  return (
    <div>
      PokemonList <Link to="/detail/pikachu">Pikachu</Link>
      <ul>
        {data?.results.map((item) => (
          <li key={item.url}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList

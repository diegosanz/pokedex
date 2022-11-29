import usePokemonDetail from '@api/hooks/usePokemonDetail/usePokemonDetail'
import SearchForm from '@components/SearchForm/SearchForm'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail: FC = () => {
  const { pokemonId } = useParams()
  const { data, isLoading, error, fetchStatus, isNotFound } = usePokemonDetail(
    pokemonId || ''
  )

  return (
    <>
      {isLoading && fetchStatus !== 'idle' ? (
        <div>Loading...</div>
      ) : isNotFound ? (
        <div>Pokemon not found</div>
      ) : error ? (
        <div>An error has occurred</div>
      ) : (
        !!data && (
          <div>
            <h1>{data.name}</h1>
            <div>
              <p>Weigth: {data.weight}</p>
              <p>Height: {data.height}</p>
            </div>
          </div>
        )
      )}
      <SearchForm />
    </>
  )
}

export default PokemonDetail

import usePokemonDetail from '@/api/hooks/usePokemonDetail/usePokemonDetail'
import NotFound from '@/components/PokemonNotFound/PokemonNotFound'
import SearchForm from '@/components/SearchForm/SearchForm'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetailPage: FC = () => {
  const { pokemonId } = useParams()
  const { data, isLoading, error, fetchStatus, isNotFound } = usePokemonDetail(
    pokemonId || ''
  )

  return (
    <>
      {isLoading && fetchStatus !== 'idle' ? (
        <div>Loading...</div>
      ) : isNotFound ? (
        <NotFound />
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

export default PokemonDetailPage

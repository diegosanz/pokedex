import usePokemonDetail from '@/api/hooks/usePokemonDetail/usePokemonDetail'
import NotFound from '@/components/PokemonNotFound/PokemonNotFound'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetailPage: FC = () => {
  const { pokemonId } = useParams()
  const { data, isLoading, error, fetchStatus, isNotFound } = usePokemonDetail(
    pokemonId || ''
  )

  if (isLoading && fetchStatus !== 'idle') {
    return <div>Loading...</div>
  }

  if (isNotFound) {
    return <NotFound />
  }

  if (error) {
    return <div>An error has occurred</div>
  }

  return (
    <>
      {!!data && (
        <div>
          <h1>{data.name}</h1>
          <div>
            <p>Weigth: {data.weight}</p>
            <p>Height: {data.height}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default PokemonDetailPage

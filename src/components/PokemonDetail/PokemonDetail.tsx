import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'

const PokemonDetail: FC = () => {
  const { pokemonId } = useParams()

  return (
    <div>
      Pokemon detail {pokemonId}. <Link to="/">Home</Link>
    </div>
  )
}

export default PokemonDetail

import { FC } from 'react'
import { Link } from 'react-router-dom'

const PokemonList: FC = () => {
  return (
    <div>
      PokemonList <Link to="/detail/pikachu">Pikachu</Link>
    </div>
  )
}

export default PokemonList

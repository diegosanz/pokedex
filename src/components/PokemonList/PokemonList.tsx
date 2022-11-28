import usePokemonList from '@api/hooks/usePokemonList'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const PokemonList: FC = () => {
  const { isLoading, error, data } = usePokemonList()

  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <>An error has occurred</>
  }

  return (
    <div>
      <ul>
        {data?.results.map((item) => (
          <li key={item.id}>
            <Link to={`/detail/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList

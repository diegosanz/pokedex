import usePokemonList from '@api/hooks/usePokemonList/usePokemonList'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const PokemonList: FC = () => {
  const { isLoading, error, data, hasNext, hasPrevious, setPageRelative } =
    usePokemonList()

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
      <div>
        <button
          aria-label="Previous page"
          disabled={!hasPrevious}
          onClick={() => setPageRelative(-1)}
        >
          &lt;
        </button>

        <button
          aria-label="Next page"
          disabled={!hasNext}
          onClick={() => setPageRelative(1)}
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default PokemonList

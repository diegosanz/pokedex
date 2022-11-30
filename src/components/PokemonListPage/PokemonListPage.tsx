import usePokemonList from '@/api/hooks/usePokemonList/usePokemonList'
import PixelButton from '@/components/PixelButton/PixelButton'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const PokemonListPage: FC = () => {
  const { isLoading, error, data, hasNext, hasPrevious, setPageRelative } =
    usePokemonList()

  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <>An error has occurred</>
  }

  return data ? (
    <div>
      <ul>
        {data.results.map((item) => (
          <li key={item.id}>
            <Link to={`/detail/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <PixelButton
          aria-label="Previous page"
          disabled={!hasPrevious}
          onClick={() => setPageRelative(-1)}
        >
          &lt;
        </PixelButton>

        <PixelButton
          aria-label="Next page"
          disabled={!hasNext}
          onClick={() => setPageRelative(1)}
        >
          &gt;
        </PixelButton>
      </div>
    </div>
  ) : null
}

export default PokemonListPage

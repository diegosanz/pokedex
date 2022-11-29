import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm: FC = () => {
  const navigate = useNavigate()

  return (
    <input
      type="text"
      onChange={(ev) => navigate(`/detail/${ev.target.value}`)}
    />
  )
}

export default SearchForm

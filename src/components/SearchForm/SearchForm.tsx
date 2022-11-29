import useDebounceFn from '@common/hooks/useDebounceFn/useDebounceFn'
import { FC, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm: FC = () => {
  const navigate = useNavigate()

  const searchInputRef = useRef<HTMLInputElement>(null)

  const search = (query: string) => {
    navigate(`/detail/${query}`)
  }

  const [timedSearchHandler] = useDebounceFn(
    () => search(searchInputRef.current?.value || ''),
    1000
  )

  return (
    <input type="text" onChange={timedSearchHandler} ref={searchInputRef} />
  )
}

export default SearchForm

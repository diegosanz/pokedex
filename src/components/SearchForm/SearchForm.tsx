import useDebounceFn from '@/common/hooks/useDebounceFn/useDebounceFn'
import { FC, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SearchForm.module.scss'

const SearchForm: FC = () => {
  const navigate = useNavigate()

  const searchInputRef = useRef<HTMLInputElement>(null)

  const search = (query: string) => {
    navigate(`/detail/${query}`)
  }

  const [timedSearchHandler] = useDebounceFn(
    () => search(searchInputRef.current?.value.toLocaleLowerCase() || ''),
    1000
  )

  return (
    <input
      type="text"
      onChange={timedSearchHandler}
      ref={searchInputRef}
      className={styles.search}
      placeholder="Search a Pokémon..."
    />
  )
}

export default SearchForm

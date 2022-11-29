import SearchForm from '@/components/SearchForm/SearchForm'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ScreenHeader.module.scss'

const ScreenHeader: FC = () => {
  return (
    <div className={styles.screenHeader}>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive ? styles.homeLinkHidden : styles.homeLinkActive
        }
      >
        Go <br /> Home
      </NavLink>
      <SearchForm />
    </div>
  )
}

export default ScreenHeader

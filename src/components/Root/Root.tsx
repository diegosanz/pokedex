import ScreenHeader from '@/components/ScreenHeader/ScreenHeader'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Root.module.scss'

const Root: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pokedexCase}>
        <div className={styles.pokedexScreenFrame}>
          <div className={styles.pokedexScreen}>
            <ScreenHeader />
            <Outlet />
          </div>
        </div>
        <div className={styles.brand}>Diego Sanz Technologies ®</div>
      </div>
    </div>
  )
}

export default Root

import { FC } from 'react'
import { Link } from 'react-router-dom'
import notFoundImg from '../../assets/img/404.jpg'
import styles from './ErrorPage.module.scss'

const ErrorPage: FC = () => {
  return (
    <div className={styles.errorPage}>
      <img src={notFoundImg} alt="404" />

      <Link to={'/'} className={styles.homeLink}>
        Go to the main page
      </Link>
    </div>
  )
}

export default ErrorPage

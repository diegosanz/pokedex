import classNames from 'classnames'
import { FC } from 'react'
import styles from './styles.module.scss'

const App: FC = () => {
  return <h1 className={classNames(styles.red)}>Hello world</h1>
}

export default App

import { FC } from 'react'
import notFoundImg from '../../assets/img/404.jpg'

const ErrorPage: FC = () => {
  return (
    <div>
      <img src={notFoundImg} alt="404" />
    </div>
  )
}

export default ErrorPage

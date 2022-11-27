import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Root: FC = () => {
  return (
    <div>
      root
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Root

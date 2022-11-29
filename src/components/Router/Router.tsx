import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage'
import PokemonDetail from '../PokemonDetail/PokemonDetail'
import PokemonList from '../PokemonList/PokemonList'
import Root from '../Root/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PokemonList />,
      },
      {
        path: 'detail',
        element: <PokemonDetail />,
      },
      {
        path: 'detail/:pokemonId',
        element: <PokemonDetail />,
      },
    ],
  },
])

const Router: FC = () => {
  return <RouterProvider router={router} />
}

export default Router

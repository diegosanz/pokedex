import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from '../ErrorPage/ErrorPage'
import PokemonDetailPage from '../PokemonDetailPage/PokemonDetailPage'
import PokemonListPage from '../PokemonListPage/PokemonListPage'
import Root from '../Root/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PokemonListPage />,
      },
      {
        path: 'detail',
        element: <PokemonDetailPage />,
      },
      {
        path: 'detail/:pokemonId',
        element: <PokemonDetailPage />,
      },
    ],
  },
])

const Router: FC = () => {
  return <RouterProvider router={router} />
}

export default Router

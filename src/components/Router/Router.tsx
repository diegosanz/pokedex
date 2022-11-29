import ErrorPage from '@/components/ErrorPage/ErrorPage'
import PokemonDetailPage from '@/components/PokemonDetailPage/PokemonDetailPage'
import PokemonListPage from '@/components/PokemonListPage/PokemonListPage'
import Root from '@/components/Root/Root'
import { FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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

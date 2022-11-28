import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import nock from 'nock'
import React from 'react'
import usePokemonList from '../usePokemonList'

describe('usePokemonList', () => {
  const pageZeroResponse = {
    count: 1154,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=15&limit=15',
    previous: null,
    results: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
      { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
      { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
      { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
      { name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/' },
      { name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/' },
      { name: 'metapod', url: 'https://pokeapi.co/api/v2/pokemon/11/' },
      { name: 'butterfree', url: 'https://pokeapi.co/api/v2/pokemon/12/' },
      { name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' },
      { name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/' },
      { name: 'beedrill', url: 'https://pokeapi.co/api/v2/pokemon/15/' },
    ],
  }

  const setup = () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    return wrapper
  }

  it('can get Pokemon list and populates `id`', async () => {
    const wrapper = setup()

    const expectation = nock('https://pokeapi.co/api/v2')
      .get('/pokemon?offset=0&limit=15')
      .reply(200, pageZeroResponse)

    const { result } = renderHook(() => usePokemonList(), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data.results.length).toEqual(15)
    expect(result.current.data.results[0].id).toEqual('1')
  })
})

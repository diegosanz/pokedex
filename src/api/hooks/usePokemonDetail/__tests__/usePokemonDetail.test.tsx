import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook } from '@testing-library/react'
import React from 'react'
import { vi } from 'vitest'
import * as fetchPokemonSearch from '../../../fetchers/fetchPokemonSearch/fetchPokemonSearch'
import usePokemonDetail from '../usePokemonDetail'

describe('usePokemonDetail', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  const fetchPokemonSearchSpy = vi.spyOn(fetchPokemonSearch, 'default')

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

  it('dont call when query is an empty string', async () => {
    const wrapper = setup()

    renderHook(() => usePokemonDetail(''), { wrapper })

    expect(fetchPokemonSearchSpy).toHaveBeenCalledTimes(0)
  })

  it('make an api call when query is a pokemon name', async () => {
    const wrapper = setup()

    renderHook(() => usePokemonDetail('pikachu'), {
      wrapper,
    })

    expect(fetchPokemonSearchSpy).toHaveBeenCalledTimes(1)
  })

  it('make an api call when query is a pokemon id', async () => {
    const wrapper = setup()

    renderHook(() => usePokemonDetail('1'), {
      wrapper,
    })

    expect(fetchPokemonSearchSpy).toHaveBeenCalledTimes(1)
  })
})

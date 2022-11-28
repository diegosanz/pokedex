import { describe, it, vi } from 'vitest'
import * as pokeApiFetchModule from '../../../utils/pokeapiFetch/pokeApiFetch'
import fetchPokemons from '../fetchPokemons'

describe('fetchPokemons', () => {
  const pokeApiFetchModuleSpy = vi.spyOn(pokeApiFetchModule, 'default')

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should use the defaults', () => {
    fetchPokemons()
    expect(pokeApiFetchModuleSpy).toHaveBeenCalledTimes(1)
    expect(pokeApiFetchModuleSpy).toBeCalledWith('/pokemon?offset=0&limit=15')
  })

  it('should calculate offset with default limit', () => {
    fetchPokemons(1)
    expect(pokeApiFetchModuleSpy).toHaveBeenCalledTimes(1)
    expect(pokeApiFetchModuleSpy).toBeCalledWith('/pokemon?offset=15&limit=15')

    fetchPokemons(10)
    expect(pokeApiFetchModuleSpy).toHaveBeenCalledTimes(2)
    expect(pokeApiFetchModuleSpy).toBeCalledWith('/pokemon?offset=150&limit=15')
  })

  it('should calculate limit and offset with custom limit', () => {
    fetchPokemons(0, 10)
    expect(pokeApiFetchModuleSpy).toHaveBeenCalledTimes(1)
    expect(pokeApiFetchModuleSpy).toBeCalledWith('/pokemon?offset=0&limit=10')

    fetchPokemons(10, 10)
    expect(pokeApiFetchModuleSpy).toHaveBeenCalledTimes(2)
    expect(pokeApiFetchModuleSpy).toBeCalledWith('/pokemon?offset=100&limit=10')
  })
})

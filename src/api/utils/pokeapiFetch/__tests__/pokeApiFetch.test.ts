import { describe, it, vi } from 'vitest'
import pokeApiFetch from '../pokeApiFetch'

describe('pokeApiFetch', () => {
  global.fetch = vi.fn(() => Promise.resolve(true) as unknown as any)

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should call endpoint with the base url prefix', () => {
    pokeApiFetch('/test')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toBeCalledWith('https://pokeapi.co/api/v2/test', undefined)
  })

  it('should pass `init` parameters', () => {
    pokeApiFetch('/test', { method: 'POST' })
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toBeCalledWith('https://pokeapi.co/api/v2/test', {
      method: 'POST',
    })
  })
})

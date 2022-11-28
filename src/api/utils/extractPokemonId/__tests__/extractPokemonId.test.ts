import extractPokemonId from '../extractPokemonId'

describe('extractPokemonId', () => {
  it('should extract the id', () => {
    const urlA = 'https://pokeapi.co/api/v2/pokemon/123/'
    expect(extractPokemonId(urlA)).toBe('123')

    const urlB = 'https://pokeapi.co/api/v2/pokemon/321/'
    expect(extractPokemonId(urlB)).toBe('321')
  })

  it('should return null on a malformated url', () => {
    const urlLocalhost = 'https://localhost'
    expect(extractPokemonId(urlLocalhost)).toBe(null)
  })
})

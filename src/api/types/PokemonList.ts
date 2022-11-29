export interface PokemonListItem {
  name: string
  url: string
  id: number
}

export interface PokemonList {
  count: number
  next: string | null
  previous: string | null
  results: PokemonListItem[]
}

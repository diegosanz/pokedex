const pokeApiFetch = (url: string, init?: RequestInit | undefined) => {
  return fetch(`https://pokeapi.co/api/v2${url}`, init)
}

export default pokeApiFetch

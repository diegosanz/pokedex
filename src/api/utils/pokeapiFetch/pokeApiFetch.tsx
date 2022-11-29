const pokeApiFetch = (url: string, init?: RequestInit | undefined) => {
  return fetch(`https://pokeapi.co/api/v2${url}`, init).then((response) => {
    if (response.status >= 400) {
      throw response
    }

    return response
  })
}

export default pokeApiFetch

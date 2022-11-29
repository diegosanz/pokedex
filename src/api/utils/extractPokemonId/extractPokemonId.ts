const extractPokemonId = (url: string) => {
  const getIdRegex = /(\d+)\/$/gm
  const result = getIdRegex.exec(url)
  return result ? result[1] : null
}

export default extractPokemonId

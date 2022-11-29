const isNotFoundError = (error: unknown) => {
  return error instanceof Response && error.status === 404
}

export default isNotFoundError

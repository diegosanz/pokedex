import { useCallback, useEffect, useRef } from 'react'

const useDebounceFn = (fn: () => void, timeout = 0) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  const fnCallback = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      fn()
    }, timeout)
  }, [fn, timeout])

  // unmount
  useEffect(() => {
    return clear
  }, [timeout, clear, fnCallback])

  return [fnCallback, clear]
}

export default useDebounceFn

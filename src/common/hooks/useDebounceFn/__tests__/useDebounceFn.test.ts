import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'
import useDebounceFn from '../useDebounceFn'

describe('useDebounceFn', () => {
  it('dont execute on instantiate', async () => {
    const fn = vi.fn()

    renderHook(() => useDebounceFn(fn, 10))

    // wait to execute
    await new Promise((r) => setTimeout(r, 11))

    expect(fn).toHaveBeenCalledTimes(0)
  })

  it('debounce and execute once after the timeout', async () => {
    const fn = vi.fn()

    const result = await renderHook(() => useDebounceFn(fn, 10))
    const [debouncedFn] = result.result.current

    debouncedFn()

    // wait to execute
    await new Promise((r) => setTimeout(r, 10))

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('debounce and execute multiple after the timeout', async () => {
    const fn = vi.fn()

    const result = await renderHook(() => useDebounceFn(fn, 10))
    const [debouncedFn] = result.result.current

    debouncedFn()
    debouncedFn()
    await new Promise((r) => setTimeout(r, 5))
    debouncedFn()
    await new Promise((r) => setTimeout(r, 5))
    debouncedFn()
    await new Promise((r) => setTimeout(r, 5))
    debouncedFn()
    await new Promise((r) => setTimeout(r, 5))
    debouncedFn()
    await new Promise((r) => setTimeout(r, 5))
    debouncedFn()

    // wait to execute
    await new Promise((r) => setTimeout(r, 11))

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('debounce, let execute, and debounce again', async () => {
    const fn = vi.fn()

    const result = await renderHook(() => useDebounceFn(fn, 10))
    const [debouncedFn] = result.result.current

    debouncedFn()
    await new Promise((r) => setTimeout(r, 5))
    debouncedFn()
    await new Promise((r) => setTimeout(r, 5))
    debouncedFn()
    await new Promise((r) => setTimeout(r, 5))
    debouncedFn()

    // wait to execute
    await new Promise((r) => setTimeout(r, 10))

    debouncedFn()
    await new Promise((r) => setTimeout(r, 5))
    debouncedFn()
    debouncedFn()
    await new Promise((r) => setTimeout(r, 5))
    debouncedFn()

    // wait to execute
    await new Promise((r) => setTimeout(r, 11))

    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('dont execute after unmount', async () => {
    const fn = vi.fn()

    const result = await renderHook(() => useDebounceFn(fn, 10))
    const [debouncedFn] = result.result.current

    debouncedFn()
    result.unmount()

    // wait to execute
    await new Promise((r) => setTimeout(r, 11))

    expect(fn).toHaveBeenCalledTimes(0)
  })
})

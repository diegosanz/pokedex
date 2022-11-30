import { render } from '@testing-library/react'
import React from 'react'
import App from '../App'

describe('App', async () => {
  const setup = () => {
    return render(<App />)
  }

  it('Renders correctly and unmount correctly', () => {
    const { unmount } = setup()
    unmount()
  })

  it('Match Snapshot', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })
})

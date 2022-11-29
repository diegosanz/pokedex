import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ErrorPage from '../ErrorPage'

describe('ErrorPage', async () => {
  const setup = () => {
    return render(
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    )
  }

  it('Renders correctly and unmount correctly', () => {
    const { unmount } = setup()
    unmount()
  })

  it('Match Snapshot', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('Should contain error title', () => {
    setup()

    expect(screen.getByRole('link')).toHaveTextContent(/Go to the main page/i)
  })
})

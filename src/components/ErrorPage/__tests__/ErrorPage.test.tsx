import { render, screen } from '@testing-library/react'
import React from 'react'
import ErrorPage from '../ErrorPage'

describe('ErrorPage', async () => {
  it('Renders correctly and unmount correctly', () => {
    const { unmount } = render(<ErrorPage />)
    unmount()
  })

  it('Match Snapshot', () => {
    const { container } = render(<ErrorPage />)
    expect(container).toMatchSnapshot()
  })

  it('Should contain error title', () => {
    render(<ErrorPage />)

    expect(screen.getByRole('heading')).toHaveTextContent('Error page')
  })
})

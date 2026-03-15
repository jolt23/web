import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders main greeting', () => {
    render(<App />)
    const el = screen.getByText(/HELLO/i)
    expect(el).toBeInTheDocument()
  })
})

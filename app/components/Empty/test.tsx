import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '~/utils/test-utils'

import { Empty } from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    const { container } = render(<Empty {...props} hasLink />, {
      wrapper: MemoryRouter
    })

    expect(
      screen.getByRole('img', {
        name: /Um computador com uma lupa a frente/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /voltar/i })).toHaveAttribute(
      'href',
      '/jobs'
    )

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should not render link when hasLink is not passed', () => {
    render(<Empty {...props} />, { wrapper: MemoryRouter })

    expect(
      screen.queryByRole('link', { name: /voltar/i })
    ).not.toBeInTheDocument()
  })
})

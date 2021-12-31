import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '~/utils/test-utils'
import Navbar from '.'

describe('<Navbar />', () => {
  it('should render the heading', () => {
    const { container } = render(<Navbar />, { wrapper: MemoryRouter })

    expect(
      screen.getByRole('img', { name: /frontend-br/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

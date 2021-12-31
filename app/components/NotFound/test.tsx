import { render, screen } from '~/utils/test-utils'
import { NotFound } from '.'

describe('<NotFound />', () => {
  it('should render the heading', () => {
    const { container } = render(<NotFound />)

    expect(
      screen.getByRole('img', { name: /Um cachorrinho dormindo/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /página não encontrada/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Voltar página inicial/i })
    ).toHaveAttribute('href', '/')

    expect(container.firstChild).toMatchSnapshot()
  })
})

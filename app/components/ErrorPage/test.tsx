import { render, screen } from '~/utils/test-utils'
import { ErrorPage } from '.'

describe('<ErrorPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<ErrorPage />)

    expect(
      screen.getByRole('img', { name: /Um robo quebrado/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Algo deu errado. Tente novamente mais tarde!/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

import { render, screen } from '~/utils/test-utils'
import { Home } from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    render(<Home />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /search/i
      })
    ).toBeInTheDocument()
  })
})

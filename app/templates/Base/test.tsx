import { render, screen } from '~/utils/test-utils'
import { Base } from '.'

jest.mock('~/components/NavBar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock NavBar"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render the base component', () => {
    render(
      <Base>
        <h1>Content</h1>
      </Base>
    )

    expect(
      screen.getByRole('heading', {
        name: /content/i
      })
    ).toBeInTheDocument()
  })
})

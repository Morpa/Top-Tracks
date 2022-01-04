import { render, screen } from '~/utils/test-utils'
import { Base } from '.'

describe('<Base />', () => {
  it('should render the base component', () => {
    render(
      <Base>
        <h1>Content</h1>
      </Base>
    )

    expect(
      screen.getByRole('heading', {
        name: /top tracks/i
      })
    )

    expect(
      screen.getByRole('heading', {
        name: /content/i
      })
    ).toBeInTheDocument()
  })
})

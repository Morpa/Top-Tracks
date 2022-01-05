import { render } from '~/utils/test-utils'
import { TopTracksGrid } from '.'

describe('<TopTracksGrid />', () => {
  it('should render correctly', () => {
    const { container } = render(<TopTracksGrid>Children</TopTracksGrid>)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        margin: 5.6rem 25rem;
      }

      @media (max-width:768px) {
        .c0 {
          margin: 5.6rem;
        }
      }

      <ul
        class="c0"
      >
        Children
      </ul>
    `)
  })
})

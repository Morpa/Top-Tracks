import { render, screen } from '~/utils/test-utils'
import { TopTrack } from '.'

const props = {
  title: "Just Can't Get Enough - 2006 Remaster",
  image_url: 'https://i.scdn.co/image/ab67616d0000b27314ed850dd8267a90b436ac5d',
  spotify_url: 'https://open.spotify.com/track/0xuXRQJfxmdP6gvfDe2Z4L'
}

describe('<TopTrack />', () => {
  it('should render the heading', () => {
    const { container } = render(<TopTrack {...props} />)

    expect(
      screen.getByRole('img', {
        name: /just can't get enough - 2006 remaster/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a link', () => {
    render(<TopTrack {...props} />)

    expect(
      screen
        .getByRole('link', {
          name: /just can't get enough - 2006 remaster/i
        })
        .closest('a')
    ).toHaveAttribute('href', `${props.spotify_url}`)
  })
})

import { render, screen } from '~/utils/test-utils'

import { ArtistCard } from '.'

const props = {
  id: '1',
  title: 'Depeche Mode',
  image_url: 'https://i.scdn.co/image/ab6761610000e5eb8ada6bad4c9b276b7fd24874'
}

describe('<ArtistCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<ArtistCard {...props} />)

    expect(
      screen.getByRole('img', {
        name: /depeche mode/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(props.title)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a link', () => {
    render(<ArtistCard {...props} />)

    expect(
      screen.getByRole('img', { name: props.title }).closest('a')
    ).toHaveAttribute('href', `artist/${props.id}`)
  })
})

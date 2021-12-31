import { Story, Meta } from '@storybook/react/types-6-0'
import { TopTrack, TopTrackProps } from '.'

export default {
  title: 'TopTrack',
  component: TopTrack,
  args: {
    title: "Just Can't Get Enough - 2006 Remaster",
    image_url:
      'https://i.scdn.co/image/ab67616d0000b27314ed850dd8267a90b436ac5d',
    spotify_url: 'https://open.spotify.com/track/0xuXRQJfxmdP6gvfDe2Z4L'
  }
} as Meta

export const Default: Story<TopTrackProps> = (args) => (
  <div style={{ width: 'auto', height: '34rem' }}>
    <TopTrack {...args} />
  </div>
)

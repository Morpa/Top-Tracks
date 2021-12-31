import { Story, Meta } from '@storybook/react/types-6-0'
import { ArtistCard, ArtistCardProps } from '.'

export default {
  title: 'ArtistCard',
  component: ArtistCard,
  args: {
    id: '1',
    title: 'Depeche Mode',
    image_url:
      'https://i.scdn.co/image/ab6761610000e5eb8ada6bad4c9b276b7fd24874'
  }
} as Meta

export const Default: Story<ArtistCardProps> = (args) => (
  <div style={{ width: '34rem', height: 'auto' }}>
    <ArtistCard {...args} />
  </div>
)

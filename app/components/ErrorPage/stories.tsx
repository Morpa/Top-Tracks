import { Story, Meta } from '@storybook/react/types-6-0'
import { ErrorPage } from '.'

export default {
  title: 'ErrorPage',
  component: ErrorPage
} as Meta

export const Default: Story = () => <ErrorPage />

import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Click me'
}

export const asLink: Story = (args) => <Button {...args} />
asLink.args = {
  size: 'large',
  children: 'Click me',
  as: 'a',
  href: 'link'
}

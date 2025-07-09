import { Meta, StoryObj } from '@storybook/nextjs'
import Main from '.'

const meta = {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta<typeof Main>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Basic: Story = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
}

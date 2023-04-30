import type { Meta, StoryObj } from '@storybook/react'

import { Layout } from './Layout'

const meta: Meta<typeof Layout> = {
  title: 'Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof Layout>

export const Primary: Story = {
  render: () => (
    <Layout sidebar={<div>Sidebar</div>} content={<div>Content</div>} />
  ),
}

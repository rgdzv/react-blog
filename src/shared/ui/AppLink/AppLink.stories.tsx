import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/'
    }
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
    args: {
        children: 'Text'
    }
}

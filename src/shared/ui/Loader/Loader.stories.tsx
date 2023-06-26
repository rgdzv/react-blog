import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs']
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
    args: {}
}

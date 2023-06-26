import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError'

const meta = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof PageError>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
    args: {}
}

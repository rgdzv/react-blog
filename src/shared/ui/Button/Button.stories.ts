import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
    args: {
        children: 'test'
    }
}

export const Usual: Story = {
    args: {
        ...Simple.args,
        className: ThemeButton.USUAL
    },
}



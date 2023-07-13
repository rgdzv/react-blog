import type { Meta, StoryObj } from '@storybook/react'
import { SideBar } from './SideBar'
import { ThemeDecorator } from 'shared/lib'

const meta = {
    title: 'widget/SideBar',
    component: SideBar,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [ThemeDecorator]
} satisfies Meta<typeof SideBar>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
    args: {}
}


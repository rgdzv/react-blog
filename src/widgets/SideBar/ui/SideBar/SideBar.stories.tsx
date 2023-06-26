import type { Meta, StoryObj } from '@storybook/react'
import { SideBar } from './SideBar'

const meta = {
    title: 'widget/SideBar',
    component: SideBar,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof SideBar>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
    args: {}
}


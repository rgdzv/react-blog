import type { Meta, StoryObj } from '@storybook/react'
import { SideBar } from './SideBar'
import { ThemeDecorator } from 'shared/lib'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
    title: 'widget/SideBar',
    component: SideBar,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [ThemeDecorator]
} satisfies Meta<typeof SideBar>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const sidebar = canvas.getByTestId('sidebar')
        
        await step('Expecting sidebar appearance with special class', async () => {
            await expect(sidebar).toBeInTheDocument()
            await expect(sidebar).toHaveClass('src-widgets-SideBar-ui-SideBar-SideBar-module__sideBar')
        })
    }
}

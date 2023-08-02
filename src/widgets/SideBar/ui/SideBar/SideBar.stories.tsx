import type { Meta, StoryObj } from '@storybook/react'
import { SideBar } from './SideBar'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
    title: 'widget/SideBar',
    component: SideBar,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof SideBar>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const sidebar = canvas.getByTestId('sidebar')

        await step(
            'Expecting sidebar appearance with special class',
            async () => {
                await expect(sidebar).toBeInTheDocument()
                await expect(sidebar).toHaveClass(
                    'src-widgets-SideBar-ui-SideBar-SideBar-module__sideBar'
                )
            }
        )
    }
}

export const Collapsed: Story = {
    args: {},
    play: async (context) => {
        const canvas = within(context.canvasElement)
        const sidebar = canvas.getByTestId('sidebar')
        const toggleButton = canvas.getByRole('button', {
            name: 'collapse-sidebar'
        })

        if (Normal.play !== undefined) {
            await Normal.play(context)
        }

        await context.step('Expecting sidebar collapse', async () => {
            await userEvent.click(toggleButton)
            await expect(sidebar).toHaveClass(
                'src-widgets-SideBar-ui-SideBar-SideBar-module__sideBar src-widgets-SideBar-ui-SideBar-SideBar-module__collapsed'
            )
        })
    }
}

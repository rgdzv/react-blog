import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { SideBar } from './SideBar'

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

export const ChangeLanguage: Story = {
    args: {},
    play: async (context) => {
        const canvas = within(context.canvasElement)
        const langRUButton = canvas.getByRole('button', {
            name: 'ru'
        })

        if (Normal.play !== undefined) {
            await Normal.play(context)
        }

        await context.step('Expecting language change', async () => {
            await userEvent.click(langRUButton)
            const langENButton = canvas.getByRole('button', {
                name: 'en'
            })
            await expect(langENButton).toBeInTheDocument()
        })
    }
}

// export const ChangeTheme: Story = {
//     args: {},
//     play: async (context) => {
//         const canvas = within(context.canvasElement)
//         const app = canvas.getByTestId('app')
//         const themeLightButton = canvas.getByRole('button', {
//             name: 'to-dark-theme'
//         })

//         await context.step('Expecting app appearance', async () => {
//             await expect(app).toBeInTheDocument()
//             await expect(app).toHaveClass('app light')
//         })

//         if (Normal.play !== undefined) {
//             await Normal.play(context)
//         }

//         await context.step('Expecting theme change', async () => {
//             await userEvent.click(themeLightButton)
//             const themeDarkButton = canvas.getByRole('button', {
//                 name: 'to-light-theme'
//             })
//             await expect(app).toHaveClass('app dark')
//             await expect(themeDarkButton).toBeInTheDocument()
//         })
//     }
// }

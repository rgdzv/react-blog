import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { ThemeDecorator } from 'shared/lib'
import { useTheme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    decorators: [ThemeDecorator]
} satisfies Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const ThemeChange: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button')
        const svgIcon = canvas.getByTestId(theme === 'light' ? 'light-theme' : 'dark-theme')

        await step('Expecting button appearance with special class and type', async () => {
            await expect(buttonName).toBeInTheDocument()
            await expect(buttonName).toHaveAttribute('type', 'button')
            await expect(buttonName).toHaveClass(
                'src-shared-ui-Button-Button-module__button'
            )
        })

        await step(
            'Expecting button contains svg element with special id',
            async () => {
                await expect(buttonName).toContainElement(svgIcon)
            }
        )

        // await step(
        //     'Expecting dark them button appear and theme change if user clicks on icon',
        //     async () => {
        //         await userEvent.click(buttonName)
        //         await expect(
        //             canvas.getByTestId('dark-theme')
        //         ).toBeInTheDocument()
        //         await expect(canvas.getByTestId('app')).toHaveClass('app dark')
        //     }
        // )
    }
}

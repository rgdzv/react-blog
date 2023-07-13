import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs']
} satisfies Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const FromLightToDark: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const buttonName = canvas.getByRole('button')
        const svgIconLight = canvas.getByTestId('light-theme')

        await step(
            'Expecting button appearance with special class and type',
            async () => {
                await expect(buttonName).toBeInTheDocument()
                await expect(buttonName).toHaveAttribute('type', 'button')
                await expect(buttonName).toHaveClass(
                    'src-shared-ui-Button-Button-module__button'
                )
            }
        )

        await step(
            'Expecting button contains svg element with special id',
            async () => {
                await expect(buttonName).toContainElement(svgIconLight)
            }
        )

        await step(
            'Expecting dark them button appear and theme change if user clicks on icon',
            async () => {
                await userEvent.click(buttonName)
                await expect(canvas.getByTestId('app')).toHaveClass('app dark')
                const svgIconDark = canvas.getByTestId('dark-theme')
                await expect(buttonName).toContainElement(svgIconDark)
            }
        )

        localStorage.removeItem('theme')
    }
}

export const FromDarkToLight: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const buttonName = canvas.getByRole('button')

        await step('Changing theme to dark', async () => {
            await userEvent.click(buttonName)
        })

        const svgIcon = canvas.getByTestId('dark-theme')

        await step(
            'Expecting button appearance with special class and type',
            async () => {
                await expect(buttonName).toBeInTheDocument()
                await expect(buttonName).toHaveAttribute('type', 'button')
                await expect(buttonName).toHaveClass(
                    'src-shared-ui-Button-Button-module__button'
                )
            }
        )

        await step(
            'Expecting button contains svg element with special id',
            async () => {
                await expect(buttonName).toContainElement(svgIcon)
            }
        )

        await step(
            'Expecting dark them button appear and theme change if user clicks on icon',
            async () => {
                await userEvent.click(buttonName)
                await expect(canvas.getByTestId('app')).toHaveClass('app light')
                await expect(
                    canvas.getByTestId('light-theme')
                ).toBeInTheDocument()
            }
        )

        localStorage.removeItem('theme')
    }
}

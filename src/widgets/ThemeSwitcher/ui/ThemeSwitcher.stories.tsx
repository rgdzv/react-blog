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
        const buttonLight = canvas.getByRole('button', {
            name: 'to-dark-theme'
        })
        const svgIconLight = canvas.getByTestId('light-theme')

        await step(
            'Expecting button appearance with special class and type',
            async () => {
                await expect(buttonLight).toBeInTheDocument()
                await expect(buttonLight).toHaveAttribute('type', 'button')
                await expect(buttonLight).toHaveClass(
                    'src-shared-ui-Button-Button-module__button'
                )
            }
        )

        await step(
            'Expecting button contains svg element with special id',
            async () => {
                await expect(buttonLight).toContainElement(svgIconLight)
            }
        )

        await step(
            'Expecting dark them button appear and theme change if user clicks on icon',
            async () => {
                await userEvent.click(buttonLight)
                const buttonDark = canvas.getByRole('button', {
                    name: 'to-light-theme'
                })
                const svgIconDark = canvas.getByTestId('dark-theme')
                await expect(buttonDark).toBeInTheDocument()
                await expect(buttonDark).toContainElement(svgIconDark)
                await expect(canvas.getByTestId('app')).toHaveClass('app dark')
            }
        )

        localStorage.removeItem('theme')
    }
}

export const FromDarkToLight: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const buttonLight = canvas.getByRole('button', {
            name: 'to-dark-theme'
        })

        await step('Changing theme to dark', async () => {
            await userEvent.click(buttonLight)
        })

        const buttonDark = canvas.getByRole('button', {
            name: 'to-light-theme'
        })
        const svgIconDark = canvas.getByTestId('dark-theme')

        await step(
            'Expecting button appearance with special class and type',
            async () => {
                await expect(buttonDark).toBeInTheDocument()
                await expect(buttonDark).toHaveAttribute('type', 'button')
                await expect(buttonDark).toHaveClass(
                    'src-shared-ui-Button-Button-module__button'
                )
            }
        )

        await step(
            'Expecting button contains svg element with special id',
            async () => {
                await expect(buttonDark).toContainElement(svgIconDark)
            }
        )

        await step(
            'Expecting dark them button appear and theme change if user clicks on icon',
            async () => {
                await userEvent.click(buttonDark)
                const buttonLight = canvas.getByRole('button', {
                    name: 'to-dark-theme'
                })
                const svgIconLight = canvas.getByTestId('light-theme')
                await expect(buttonLight).toBeInTheDocument()
                await expect(buttonLight).toContainElement(svgIconLight)
                await expect(canvas.getByTestId('app')).toHaveClass('app light')
            }
        )

        localStorage.removeItem('theme')
    }
}

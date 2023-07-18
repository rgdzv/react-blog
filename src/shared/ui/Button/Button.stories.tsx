import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonTheme } from './Button'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { ThemeDark, ThemeLight } from '../../assets'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: 'Button'
    }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button', { name: /button/i })

        await step('Expecting button appearance with special class and type', async () => {
            await expect(buttonName).toBeInTheDocument()
            await expect(buttonName).toHaveAttribute('type', 'button')
            await expect(buttonName).toHaveClass(
                'src-shared-ui-Button-Button-module__button'
            )
        })
    }
}

export const LangButtonRU: Story = {
    args: {
        children: 'RU',
        className: ButtonTheme.LANG
    },
    play: async (context) => {
        const canvas = within(context.canvasElement)

        const buttonName = canvas.getByRole('button', { name: 'RU' })

        await context.step('Expecting button appearance with special class and type', async () => {
            await expect(buttonName).toBeInTheDocument()
            await expect(buttonName).toHaveAttribute('type', 'button')
            await expect(buttonName).toHaveClass(
                'src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__lang'
            )
        })
        // if (Simple.play !== undefined) {
        //     await Simple.play(context)
        // }
    }
}

export const LangButtonEN: Story = {
    args: {
        children: 'EN',
        className: ButtonTheme.LANG
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button', { name: 'EN' })

        await step('Expecting button appearance with special class and type', async () => {
            await expect(buttonName).toBeInTheDocument()
            await expect(buttonName).toHaveAttribute('type', 'button')
            await expect(buttonName).toHaveClass(
                'src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__lang'
            )
        })
    }
}

export const ThemeLightButton: Story = {
    args: {
        children: <ThemeLight data-testid='light-theme' />
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button')
        const svgIcon = canvas.getByTestId('light-theme')

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
    }
}

export const ThemeDarkButton: Story = {
    args: {
        children: <ThemeDark data-testid='dark-theme' />
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button')
        const svgIcon = canvas.getByTestId('dark-theme')

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
    }
}

export const ReloadButton: Story = {
    args: {
        children: 'Обновить страницу',
        className: ButtonTheme.RELOAD
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button', {
            name: 'Обновить страницу'
        })

        await step('Expecting button appearance with special class and type', async () => {
            await expect(buttonName).toBeInTheDocument()
            await expect(buttonName).toHaveAttribute('type', 'button')
            await expect(buttonName).toHaveClass(
                'src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__reload'
            )
        })
    }
}

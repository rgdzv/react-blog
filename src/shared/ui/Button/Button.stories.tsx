import { expect, within } from '@storybook/test'
import { ArrowIcon, ThemeIcon } from '../../assets'
import { Button } from './Button'
import type { Meta, StoryObj } from '@storybook/react'

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
    }
}

export const Disabled: Story = {
    args: {
        disabled: true
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button', { name: /button/i })

        await step('Expecting button to be disabled', async () => {
            await expect(buttonName).toBeInTheDocument()
            await expect(buttonName).toHaveAttribute('disabled')
            await expect(buttonName).toBeDisabled()
        })
    }
}

export const LangButton: Story = {
    args: {
        children: 'RU',
        className: 'lang'
    },
    play: async (context) => {
        const canvas = within(context.canvasElement)

        const buttonName = canvas.getByRole('button', { name: 'RU' })

        await context.step(
            'Expecting button appearance with special class and type',
            async () => {
                await expect(buttonName).toBeInTheDocument()
                await expect(buttonName).toHaveAttribute('type', 'button')
                await expect(buttonName).toHaveClass(
                    'src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__lang'
                )
            }
        )
    }
}

export const ThemeIconButton: Story = {
    args: {
        children: <ThemeIcon data-testid='theme-icon' />
    },
    parameters: {
        a11y: {
            element: '#storybook-root',
            config: {
                rules: [
                    {
                        id: 'button-name',
                        enabled: false
                    }
                ]
            }
        }
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button')
        const svgIcon = canvas.getByTestId('theme-icon')

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
    }
}

export const ReloadButton: Story = {
    args: {
        children: 'Обновить страницу',
        className: 'bordered'
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button', {
            name: 'Обновить страницу'
        })

        await step(
            'Expecting button appearance with special class and type',
            async () => {
                await expect(buttonName).toBeInTheDocument()
                await expect(buttonName).toHaveAttribute('type', 'button')
                await expect(buttonName).toHaveClass(
                    'src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__bordered'
                )
            }
        )
    }
}

export const SidebarToggleButton: Story = {
    args: {
        children: <ArrowIcon data-testid='arrow-icon' />
    },
    parameters: {
        a11y: {
            element: '#storybook-root',
            config: {
                rules: [
                    {
                        id: 'button-name',
                        enabled: false
                    }
                ]
            }
        }
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button')
        const svgIcon = canvas.getByTestId('arrow-icon')

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
    }
}

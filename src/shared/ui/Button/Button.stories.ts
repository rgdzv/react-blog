import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonTheme } from './Button'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

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

export const Simple: Story = {
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button', { name: /button/i })

        await step('Expecting button UI', async () => {
            await expect(buttonName).toBeInTheDocument()
        })

        await step('Expecting button to have attribute and value', async () => {
            await expect(buttonName).toHaveAttribute('type', 'button')
        })

        await step('Expecting button to have a special class', async () => {
            await expect(buttonName).toHaveClass(
                'src-shared-ui-Button-Button-module__button'
            )
        })
    }
}

export const LangButton: Story = {
    args: {
        children: 'RU',
        className: ButtonTheme.LANG
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button', { name: 'RU' })

        await step('Expecting button UI', async () => {
            await expect(buttonName).toBeInTheDocument()
        })

        await step('Expecting button to have attribute and value', async () => {
            await expect(buttonName).toHaveAttribute('type', 'button')
        })

        await step('Expecting button to have a special class', async () => {
            await expect(buttonName).toHaveClass(
                'src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__lang'
            )
        })
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

        await step('Expecting button UI', async () => {
            await expect(buttonName).toBeInTheDocument()
        })

        await step('Expecting button to have attribute and value', async () => {
            await expect(buttonName).toHaveAttribute('type', 'button')
        })

        await step('Expecting button to have a special class', async () => {
            await expect(buttonName).toHaveClass(
                'src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__reload'
            )
        })
    }
}

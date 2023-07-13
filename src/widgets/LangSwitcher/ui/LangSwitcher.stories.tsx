import type { Meta, StoryObj } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
    title: 'widget/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs']
} satisfies Meta<typeof LangSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const FromRUToEN: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button', { name: 'ru' })

        await step(
            'Expecting button appearance with special class and type',
            async () => {
                await expect(buttonName).toBeInTheDocument()
                await expect(buttonName).toHaveAttribute('type', 'button')
                await expect(buttonName).toHaveClass(
                    'src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__lang'
                )
            }
        )

        await step('Switch from russian to english', async () => {
            await userEvent.click(buttonName)
            await expect(
                canvas.getByRole('button', { name: 'en' })
            ).toBeInTheDocument()
        })

        await userEvent.click(buttonName)
    }
}

export const FromENToRU: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        await userEvent.click(canvas.getByRole('button', { name: 'ru' }))

        const buttonName = canvas.getByRole('button', { name: 'en' })

        await step(
            'Expecting button appearance with special class and type',
            async () => {
                await expect(buttonName).toBeInTheDocument()
                await expect(buttonName).toHaveAttribute('type', 'button')
                await expect(buttonName).toHaveClass(
                    'src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__lang'
                )
            }
        )

        await step('Switch from english to russian', async () => {
            await userEvent.click(buttonName)
            await expect(
                canvas.getByRole('button', { name: 'ru' })
            ).toBeInTheDocument()
        })
    }
}

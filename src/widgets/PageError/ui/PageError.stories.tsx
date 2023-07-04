import type { Meta, StoryObj } from '@storybook/react'
import { PageError } from './PageError'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
    title: 'widget/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof PageError>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const errorName = canvas.getByText('Извините. Произошла непредвиденная ошибка!')
        const reloadButton = canvas.getByRole('button', { name: /Обновить страницу/i })

        await step('Expecting error UI', async () => {
            await expect(
                errorName
            ).toBeInTheDocument()
            await expect(
                reloadButton
            ).toBeInTheDocument()
        })

        await step('Expecting reloadButton to have a special class', async () => {
            await expect(
                reloadButton
            ).toHaveClass('src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__reload')
        })
    }
}

import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs']
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const loader = canvas.getByTestId('loader')

        await step('Expecting loader appearance with special class', async () => {
            await expect(loader).toBeInTheDocument()
            await expect(loader).toHaveClass(
                'src-shared-ui-Loader-Loader-module__loader'
            )
        })
    }
}

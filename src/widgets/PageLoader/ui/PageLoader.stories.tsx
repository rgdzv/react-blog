import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
    title: 'widget/PageLoader',
    component: PageLoader,
    tags: ['autodocs']
} satisfies Meta<typeof PageLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const loader = canvas.getByTestId('pageLoader')
        const span = canvas.getByTestId('loader')

        await step(
            'Expecting pageLoader appearance with special class',
            async () => {
                await expect(loader).toBeInTheDocument()
                await expect(loader).toHaveClass(
                    'src-widgets-PageLoader-ui-PageLoader-module__pageLoader'
                )
            }
        )

        await step(
            'Expecting PageLoader contains span with special id',
            async () => {
                await expect(loader).toContainElement(span)
            }
        )
    }
}

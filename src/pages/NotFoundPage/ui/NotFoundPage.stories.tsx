import { expect, within } from '@storybook/test'
import NotFoundPage from './NotFoundPage'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs']
} satisfies Meta<typeof NotFoundPage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const notFoundPage = canvas.getByTestId('not-found-page')

        await step(
            'Expecting notfound error block appearance with special class',
            async () => {
                await expect(notFoundPage).toBeInTheDocument()
                await expect(notFoundPage).toHaveClass(
                    'src-widgets-Page-ui-Page-module__page src-widgets-Page-ui-Page-module__notFound'
                )
            }
        )
    }
}

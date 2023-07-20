import type { Meta, StoryObj } from '@storybook/react'
import NotFoundPage from './NotFoundPage'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

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
        const notFoundPage = canvas.getByTestId('notfoundpage')

        await step('Expecting notfound error block appearance with special class', async () => {
            await expect(notFoundPage).toBeInTheDocument()
            await expect(notFoundPage).toHaveClass('src-pages-NotFoundPage-ui-NotFoundPage-module__notFound')
        })
    }
}

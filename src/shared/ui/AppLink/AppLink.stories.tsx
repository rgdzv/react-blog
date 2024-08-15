import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { AppLink } from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        children: 'Text'
    }
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        to: '/somewhere'
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const link = canvas.getByRole('link', { name: /text/i })

        await step(
            'Expecting link appearance with <href> attribute',
            async () => {
                await expect(link).toBeInTheDocument()
                await expect(link).toHaveAttribute('href', '/somewhere')
            }
        )
    }
}

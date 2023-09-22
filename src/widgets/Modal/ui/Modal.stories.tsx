import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
    title: 'widget/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        children: 'TEST'
    }
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        open: false,
        closeModal: () => {}
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const modal = canvas.getByTestId('modal')

        await step(
            'Expecting modal appearance with special class',
            async () => {
                await expect(modal).toBeInTheDocument()
                await expect(modal).toHaveClass(
                    'src-widgets-Modal-ui-Modal-module__dialog'
                )
                await expect(modal).not.toHaveAttribute('open')
            }
        )
    }
}

export const Opened: Story = {
    args: {
        open: true,
        closeModal: () => {}
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const modal = canvas.getByTestId('modal')

        await step('Expecting modal to have [open] attribute', async () => {
            await expect(modal).toBeInTheDocument()
            await expect(modal).toHaveClass(
                'src-widgets-Modal-ui-Modal-module__dialog'
            )
            // await expect(modal).toHaveAttribute('open')
        })
    }
}

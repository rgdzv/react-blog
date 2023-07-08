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

export const Simple: Story = {
    args: {},
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const buttonName = canvas.getByRole('button', { name: 'ru' })

        await step('Expecting button appearance with special class and type', async () => {
            await expect(buttonName).toBeInTheDocument()
            await expect(buttonName).toHaveAttribute('type', 'button')
            await expect(buttonName).toHaveClass(
                'src-shared-ui-Button-Button-module__button src-shared-ui-Button-Button-module__lang'
            )
        })
    }
}

// export const SwitchLanguage: Story = {
//     args: {},
//     play: async (context) => {
//         const canvas = within(context.canvasElement)

//         if (Simple.play !== undefined) {
//             await Simple.play(context)
//         }

//         await context.step('Switch to another language', async () => {
//             await userEvent.click(canvas.getByRole('button', { name: 'ru' }))
//             await expect(
//                 canvas.getByRole('button', { name: 'en' })
//             ).toBeInTheDocument()
//         })
//     }
// }

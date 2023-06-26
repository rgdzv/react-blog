import type { Meta, StoryObj } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'

const meta = {
    title: 'widget/LangSwitcher',
    component: LangSwitcher,
    tags: ['autodocs']
} satisfies Meta<typeof LangSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
    args: {}
}

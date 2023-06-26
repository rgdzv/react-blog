import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs']
} satisfies Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>

export const Simple: Story = {
    args: {}
}

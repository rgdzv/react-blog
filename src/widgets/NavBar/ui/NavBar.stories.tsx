import type { Meta, StoryObj } from '@storybook/react'
import { NavBar } from './NavBar'
import { userEvent, within, expect } from '@storybook/test'

const meta = {
    title: 'widget/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof NavBar>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        collapsed: false
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const navbar = canvas.getByTestId('navbar')
        const main = canvas.getByTestId('main')
        const about = canvas.getByTestId('about')
        const svgHome = canvas.getByTestId('home-icon')
        const svgInfo = canvas.getByTestId('info-icon')
        const mainLink = canvas.getByRole('link', { name: 'Главная' })
        const infoLink = canvas.getByRole('link', { name: 'О сайте' })

        await step(
            'Expecting navbar appearance with special class',
            async () => {
                await expect(navbar).toBeInTheDocument()
                await expect(navbar).toHaveClass(
                    'src-widgets-NavBar-ui-NavBar-module__navBar'
                )
            }
        )

        await step(
            'Expecting navbar list appearance with special class',
            async () => {
                await expect(main).toBeInTheDocument()
                await expect(about).toBeInTheDocument()
                await expect(main).toHaveClass(
                    'src-widgets-NavBar-ui-NavBar-module__list'
                )
                await expect(about).toHaveClass(
                    'src-widgets-NavBar-ui-NavBar-module__list'
                )
            }
        )

        await step(
            'Expecting navbar list contains special icons and link names',
            async () => {
                await expect(main).toContainElement(svgHome)
                await expect(main).toContainElement(mainLink)
                await expect(mainLink).toHaveAttribute('href', '/')
                await expect(about).toContainElement(svgInfo)
                await expect(about).toContainElement(infoLink)
                await expect(infoLink).toHaveAttribute('href', '/about')
            }
        )
    }
}

export const Collapsed: Story = {
    args: {
        collapsed: true
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)
        const navbar = canvas.getByTestId('navbar')
        const main = canvas.getByTestId('main')
        const about = canvas.getByTestId('about')
        const svgHome = canvas.getByTestId('home-icon')
        const svgInfo = canvas.getByTestId('info-icon')

        await step(
            'Expecting navbar appearance with special class',
            async () => {
                await expect(navbar).toBeInTheDocument()
                await expect(navbar).toHaveClass(
                    'src-widgets-NavBar-ui-NavBar-module__navBar'
                )
            }
        )

        await step(
            'Expecting navbar list appearance with special class',
            async () => {
                await expect(main).toBeInTheDocument()
                await expect(about).toBeInTheDocument()
                await expect(main).toHaveClass(
                    'src-widgets-NavBar-ui-NavBar-module__list'
                )
                await expect(about).toHaveClass(
                    'src-widgets-NavBar-ui-NavBar-module__list'
                )
            }
        )

        await step(
            'Expecting navbar list contains special icons without link names',
            async () => {
                await expect(main).toContainElement(svgHome)
                await expect(main).not.toContainElement(
                    canvas.queryByText('Главная')
                )
                await expect(about).toContainElement(svgInfo)
                await expect(about).not.toContainElement(
                    canvas.queryByText('О сайте')
                )
            }
        )
    }
}

export const Active: Story = {
    args: {
        collapsed: false
    },
    play: async (context) => {
        const canvas = within(context.canvasElement)

        if (Normal.play !== undefined) {
            await Normal.play(context)
        }

        await context.step(
            'Expecting list has class active when user clicks on link',
            async () => {
                await userEvent.click(canvas.getByTestId('main'))
                await expect(canvas.getByTestId('main')).toHaveClass(
                    'src-widgets-NavBar-ui-NavBar-module__list src-widgets-NavBar-ui-NavBar-module__active'
                )
            }
        )
    }
}

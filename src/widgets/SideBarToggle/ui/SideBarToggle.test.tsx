import { render, screen } from '@testing-library/react'
import { SideBarToggle } from './SideBarToggle'

describe('SideBarToggle', () => {
    test('not collapsed', () => {
        render(<SideBarToggle collapsed={false} />)
        const button = screen.getByRole('button', { name: 'collapse-sidebar' })
        const svgIcon = screen.getByTestId('arrow-light')
        expect(button).toBeInTheDocument()
        expect(button).toContainElement(svgIcon)
    })

    test('collapsed', () => {
        render(<SideBarToggle collapsed={true} />)
        const button = screen.getByRole('button', { name: 'expand-sidebar' })
        const svgIcon = screen.getByTestId('arrow-light')
        expect(button).toBeInTheDocument()
        expect(button).toContainElement(svgIcon)
    })
})

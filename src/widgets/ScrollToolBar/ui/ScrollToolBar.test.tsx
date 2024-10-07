import { render, screen } from '@testing-library/react'
import { ScrollToolBar } from './ScrollToolBar'

describe('ScrollToolBar', () => {
    test('render', () => {
        render(<ScrollToolBar />)

        const scrollToolBar = screen.getByTestId('scrollToolBar')
        const button = screen.getByRole('button')
        expect(scrollToolBar).toBeInTheDocument()
        expect(scrollToolBar).toContainElement(button)
    })
})

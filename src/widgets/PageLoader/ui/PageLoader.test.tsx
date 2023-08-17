import { render, screen } from '@testing-library/react'
import { PageLoader } from './PageLoader'

describe('PageLoader', () => {
    test('render', () => {
        render(<PageLoader />)
        const pageLoader = screen.getByTestId('pageLoader')
        const loader = screen.getByTestId('loader')
        expect(pageLoader).toBeInTheDocument()
        expect(pageLoader).toContainElement(loader)
    })
})

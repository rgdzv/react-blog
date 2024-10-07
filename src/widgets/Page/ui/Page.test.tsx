import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { Page } from './Page'

describe('Page', () => {
    test('render', () => {
        render(
            <MemoryRouter>
                <StoreProvider>
                    <Page dataTestId='test-page' className='test'>
                        <div data-testid='test-div'></div>
                    </Page>
                </StoreProvider>
            </MemoryRouter>
        )

        const page = screen.getByTestId('test-page')
        const pageContent = screen.getByTestId('test-div')
        expect(page).toBeInTheDocument()
        expect(page).toHaveClass('page test')
        expect(page).toContainElement(pageContent)
    })
})

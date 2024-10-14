import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { ScrollToTopButton } from './ScrollToTopButton'

describe('ScrollToTopButton', () => {
    test('should render component correctly', () => {
        render(<ScrollToTopButton />)

        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    test('window.scrollTo needs to be called with the correct arguments ', async () => {
        const user = userEvent.setup()

        render(<ScrollToTopButton />)

        const scrollToMock = jest.fn()
        window.scrollTo = scrollToMock

        await user.click(screen.getByRole('button'))

        expect(scrollToMock).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth'
        })
    })
})

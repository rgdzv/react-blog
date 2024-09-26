import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Stars } from './Stars'

describe('Stars', () => {
    const handleRatingUpdate = jest.fn()
    const rate = 3
    const starsNumber = [1, 2, 3, 4, 5]

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('renders the component with the given rating', () => {
        render(<Stars rate={rate} handleRatingUpdate={handleRatingUpdate} />)

        const stars = screen.getByTestId('stars')
        expect(stars).toBeInTheDocument()

        const starIcons = screen.getAllByTestId('star-icon')
        expect(starIcons.length).toBe(starsNumber.length)

        const highlightedStars = starIcons.slice(0, rate)
        highlightedStars.forEach((star) => {
            expect(star).toHaveClass('hovered')
        })

        const nonHighlightedStars = starIcons.slice(rate)
        nonHighlightedStars.forEach((star) => {
            expect(star).toHaveClass('normal')
        })
    })
    it('hovers over a star', async () => {
        const user = userEvent.setup()

        render(<Stars rate={rate} handleRatingUpdate={handleRatingUpdate} />)

        const starIcons = screen.getAllByTestId('star-icon')

        const starToHover = starIcons[4]
        await user.hover(starToHover)

        const highlightedStars = starIcons.slice(0, 5)
        highlightedStars.forEach((star) => {
            expect(star).toHaveClass('hovered')
        })
    })
    it('leaves a star', async () => {
        const user = userEvent.setup()

        render(<Stars rate={rate} handleRatingUpdate={handleRatingUpdate} />)

        const starIcons = screen.getAllByTestId('star-icon')

        const starToHover = starIcons[4]
        await user.hover(starToHover)

        const highlightedStars = starIcons.slice(0, 5)
        highlightedStars.forEach((star) => {
            expect(star).toHaveClass('hovered')
        })

        await user.unhover(starToHover)

        const nonHighlightedStars = starIcons.slice(rate)
        nonHighlightedStars.forEach((star) => {
            expect(star).toHaveClass('normal')
        })
    })
    it('clicks on a star', async () => {
        const user = userEvent.setup()

        render(<Stars rate={rate} handleRatingUpdate={handleRatingUpdate} />)

        const starIcons = screen.getAllByTestId('star-icon')

        const starToHover = starIcons[4]
        await user.click(starToHover)

        expect(handleRatingUpdate).toHaveBeenCalledTimes(1)
        expect(handleRatingUpdate).toHaveBeenCalledWith(5)
    })
})

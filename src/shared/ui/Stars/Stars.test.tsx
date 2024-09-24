import { render, screen } from '@testing-library/react'
import { Stars } from './Stars'

describe('Stars', () => {
    test('render', () => {
        render(<Stars rate={5} handleRatingUpdate={() => {}} />)
        const stars = screen.getByTestId('stars')
        expect(stars).toBeInTheDocument()
    })
})

import { render, screen } from '@testing-library/react'
import { Loader } from './Loader'

describe('Loader', () => {
    test('render', () => {
        render(<Loader />)

        const loader = screen.getByTestId('loader')
        expect(loader).toBeInTheDocument()
    })
})

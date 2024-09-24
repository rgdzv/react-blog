import { render, screen } from '@testing-library/react'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
    test('render', () => {
        render(<Skeleton />)
        const skeleton = screen.getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    test('render with special type', () => {
        render(<Skeleton type='profileHeader' />)
        const skeleton = screen.getByTestId('profileHeader')
        expect(skeleton).toBeInTheDocument()
        expect(skeleton).toHaveClass('profileHeader')
    })
})

import { render, screen } from '@testing-library/react'
import { Image } from './Image'

describe('Image', () => {
    test('render', () => {
        render(
            <Image
                className='article_avatar'
                src='test'
                alt='test'
                errorImage='test-error-img'
            />
        )

        const imageWrapper = screen.getByTestId('image')
        const image: HTMLImageElement = screen.getByRole('img')
        expect(imageWrapper).toBeInTheDocument()
        expect(imageWrapper).toHaveClass('article_avatar')
        expect(imageWrapper).toContainElement(image)
        expect(image).toHaveAttribute('src', 'test')
        expect(image).toHaveAttribute('alt', 'test')
    })
    test('without className', () => {
        render(<Image src='test' alt='test' errorImage='test' />)

        const imageWrapper = screen.getByTestId('image')
        expect(imageWrapper).toBeInTheDocument()
        expect(imageWrapper).not.toHaveClass('article_avatar')
    })
})

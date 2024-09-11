import { memo, type FC } from 'react'
import { ScrollTopIcon } from 'shared/assets'
import { Button } from 'shared/ui'

export const ScrollToTopButton: FC = memo(() => {
    const handleClick = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Button
            className='scrolltop'
            onClick={handleClick}
            aria-label='scrolltop'
        >
            <ScrollTopIcon />
        </Button>
    )
})

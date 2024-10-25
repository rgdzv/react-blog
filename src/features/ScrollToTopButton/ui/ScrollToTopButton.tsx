import { memo } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollTopIcon } from 'shared/assets'
import { Button } from 'shared/ui'

export const ScrollToTopButton: FC = memo(() => {
    const { t } = useTranslation()
    const svgTitle = t('Прокрутить в начало')

    const handleClick = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Button
            className='scrolltop'
            onClick={handleClick}
            aria-label='scrolltop'
        >
            <ScrollTopIcon title={svgTitle} />
        </Button>
    )
})

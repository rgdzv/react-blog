import { memo } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

export const LangSwitcher: FC = memo(() => {
    const { t, i18n } = useTranslation()
    const language = t('ru')

    const toggleLang = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button onClick={toggleLang} className='lang'>
            {language}
        </Button>
    )
})

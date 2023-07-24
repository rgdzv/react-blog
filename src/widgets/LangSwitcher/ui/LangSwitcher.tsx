import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui'

export const LangSwitcher: FC = () => {
    const { t, i18n } = useTranslation()

    const toggleLang = async (): Promise<void> => {
        try {
            await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            }
        }
    }

    const language = t('ru')

    return (
        <Button onClick={toggleLang} className={ButtonTheme.LANG}>
            {language}
        </Button>
    )
}

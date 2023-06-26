import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui'

interface LangSwitcherPropsInterface {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherPropsInterface> = ({ className }) => {
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

    const language = t('RU')

    return (
        <Button
            onClick={toggleLang}
            className={ThemeButton.LANG}
        >
            {language}
        </Button>
    )
}

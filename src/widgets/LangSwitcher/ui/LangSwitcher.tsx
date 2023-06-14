import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui'
import styles from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib'

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

    const language = t('Язык')

    const classNameChecked = className !== undefined ? className : ''

    return (
        <Button
            onClick={toggleLang}
            className={classNames(styles.langSwitcher, {}, [classNameChecked])}
            theme={ThemeButton.CLEAR}
        >
            {language}
        </Button>
    )
}

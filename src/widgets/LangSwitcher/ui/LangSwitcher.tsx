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

    const toggleLang = (): void => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    const language = t('Язык')

    return (
        <Button
            onClick={toggleLang}
            className={classNames(styles.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {language}
        </Button>
    )
}

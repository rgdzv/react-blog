import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui'
import styles from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib';

interface LangSwitcherPropsInterface {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherPropsInterface> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button 
            onClick={toggle}
            className={classNames(styles.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </Button>
    )
}

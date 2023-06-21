import { type FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './PageErrors.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui'

interface PageErrorPropsInterface {
    className?: string
}

export const PageError: FC<PageErrorPropsInterface> = ({ className }) => {
    const { t } = useTranslation('error')

    const classNameChecked = className ?? ''

    const errorText = t('Извините. Произошла непредвиденная ошибка!')
    const buttonText = t('Обновить страницу')

    const reloadPage = (): void => {
        location.reload()
    }

    return (
        <div className={classNames(styles.error, {}, [classNameChecked])}>
            <h1>{errorText}</h1>
            <Button onClick={reloadPage} theme={ThemeButton.USUAL}>
                {buttonText}
            </Button>
        </div>
    )
}

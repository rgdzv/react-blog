import { type FC } from 'react'
import styles from './PageErrors.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

export const PageError: FC = () => {
    const { t } = useTranslation('error')

    const errorText = t('Извините. Произошла непредвиденная ошибка!')
    const buttonText = t('Обновить страницу')

    const reloadPage = (): void => {
        location.reload()
    }

    return (
        <div className={styles.error} data-testid='pageError'>
            <h1>{errorText}</h1>
            <Button onClick={reloadPage} className='reload'>
                {buttonText}
            </Button>
        </div>
    )
}

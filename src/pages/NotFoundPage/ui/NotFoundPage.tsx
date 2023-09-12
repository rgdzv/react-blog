import { type FC } from 'react'
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const NotFoundPage: FC = () => {
    const error = useRouteError()
    const { t } = useTranslation('error')

    const errorType = isRouteErrorResponse(error) ? (
        <i>
            {error.status} {error.statusText}
        </i>
    ) : error instanceof Error ? (
        <i>{error.message}</i>
    ) : (
        <i>{t('Неизвестная ошибка')}</i>
    )

    const errorBlock = (
        <>
            <h1>{t('Ой!')}</h1>
            <p>{t('Извините. Произошла непредвиденная ошибка!')}</p>
            <p>{errorType}</p>
        </>
    )

    return (
        <div className={styles.notFound} data-testid='not-found-page'>
            {errorBlock}
        </div>
    )
}

export default NotFoundPage

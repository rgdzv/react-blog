import { type FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

interface NotFoundPagePropsInterface {
    className?: string
}

const NotFoundPage: FC<NotFoundPagePropsInterface> = ({ className }) => {
    const error = useRouteError()
    const { t } = useTranslation('error')

    const classNameChecked = className ?? ''

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
            <h1>{t('Упс!')}</h1>
            <p>{t('Извините. Произошла непредвиденная ошибка!')}</p>
            <p>{errorType}</p>
        </>
    )

    return (
        <div className={classNames(styles.notFound, {}, [classNameChecked])}>
            {errorBlock}
        </div>
    )
}

export default NotFoundPage

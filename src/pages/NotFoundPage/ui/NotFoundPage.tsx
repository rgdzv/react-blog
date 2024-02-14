import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Page } from 'widgets/Page'

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
        <Page className='notFound' dataTestId='not-found-page'>
            {errorBlock}
        </Page>
    )
}

export default NotFoundPage

import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

const MainPage: FC = () => {
    const { t } = useTranslation('main')

    const main = t('Главная')

    return <Page dataTestId='main-page'>{main}</Page>
}

export default MainPage

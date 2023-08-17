import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
    const { t } = useTranslation('main')

    const main = t('Главная')

    return <div data-testid='main-page'>{main}</div>
}

export default MainPage

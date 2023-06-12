import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface MainPagePropsInterface {}

const MainPage: FC<MainPagePropsInterface> = ({}) => {
    const { t } = useTranslation('main')

    const main = t('Главная')

    return <div>{main}</div>
}

export default MainPage

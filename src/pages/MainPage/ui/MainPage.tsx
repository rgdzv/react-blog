import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface MainPagePropsInterface {}

const MainPage: FC<MainPagePropsInterface> = ({}) => {
    const { t } = useTranslation('main')

    return (
        <div>{t('Главная')}</div>
    )
}

export default MainPage
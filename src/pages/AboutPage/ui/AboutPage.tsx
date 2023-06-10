import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface AboutPagePropsInterface {}

const AboutPage: FC<AboutPagePropsInterface> = ({}) => {
    const { t } = useTranslation('about')

    return (
        <div>{t('О сайте')}</div>
    )
}

export default AboutPage
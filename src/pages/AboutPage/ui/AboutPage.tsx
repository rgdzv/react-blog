import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {
    const { t } = useTranslation('about')

    const about = t('О сайте')

    return <div>{about}</div>
}

export default AboutPage

import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface AboutPagePropsInterface {}

const AboutPage: FC<AboutPagePropsInterface> = ({}) => {
    const { t } = useTranslation('about')

    const about = t('О сайте')

    return <div>{about}</div>
}

export default AboutPage

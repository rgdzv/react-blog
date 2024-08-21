import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

const AboutPage: FC = () => {
    const { t } = useTranslation('about')

    const about = t('О сайте')

    return <Page dataTestId='about-page'>{about}</Page>
}

export default AboutPage

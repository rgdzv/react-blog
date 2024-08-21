import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

const SettingsPage: FC = () => {
    const { t } = useTranslation('settings')

    const settings = t('Настройки')

    return <Page dataTestId='settings-page'>{settings}</Page>
}

export default SettingsPage

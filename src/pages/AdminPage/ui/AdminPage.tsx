import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page'

const AdminPage: FC = () => {
    const { t } = useTranslation('admin')

    const admin = t('Панель администратора')

    return <Page dataTestId='admin-page'>{admin}</Page>
}

export default AdminPage

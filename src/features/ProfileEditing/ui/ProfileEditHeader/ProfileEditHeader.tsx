import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Avatar, Button } from 'shared/ui'
import styles from './ProfileEditHeader.module.scss'

export const ProfileEditHeader: FC = () => {
    const { t } = useTranslation(['profile'])
    const edit = t('Редактировать')
    const cancel = t('Отменить')

    return (
        <header className={styles.profileHeader}>
            <Button className='bordered'>{cancel}</Button>
            <Avatar />
            <Button className='bordered'>{edit}</Button>
        </header>
    )
}

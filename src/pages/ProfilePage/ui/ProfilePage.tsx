import { ProfileEditWrapper } from 'features/ProfileEditing'
import { type FC } from 'react'
import styles from './ProfilePage.module.scss'

const ProfilePage: FC = () => {
    return (
        <div className={styles.profilePage} data-testid='profile-page'>
            <ProfileEditWrapper />
        </div>
    )
}

export default ProfilePage

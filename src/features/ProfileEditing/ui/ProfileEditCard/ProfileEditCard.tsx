import { type FC } from 'react'
import styles from './ProfileEditCard.module.scss'
import { type Profile, ProfileCard } from 'entities_/Profile'

interface ProfileEditCardPropsInterface {
    profileData: Profile
}

export const ProfileEditCard: FC<ProfileEditCardPropsInterface> = ({
    profileData
}) => {
    return (
        <div className={styles.profileEditCard}>
            <ProfileCard profileData={profileData} />
        </div>
    )
}

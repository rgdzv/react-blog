import { type FC } from 'react'
import styles from './ProfileEditCard.module.scss'
import { type Profile, ProfileCard } from 'entities_/Profile'
import { useAppSelector } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'

interface ProfileEditCardPropsInterface {
    profileData: Profile
    isLoading: boolean
}

export const ProfileEditCard: FC<ProfileEditCardPropsInterface> = ({
    profileData,
    isLoading
}) => {
    const readOnly = useAppSelector(getProfileReadOnly)

    return (
        <div className={styles.profileEditCard}>
            <ProfileCard
                profileData={profileData}
                isLoading={isLoading}
                readOnly={readOnly}
            />
        </div>
    )
}

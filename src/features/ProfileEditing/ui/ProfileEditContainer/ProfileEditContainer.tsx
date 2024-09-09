import type { FC } from 'react'
import { useAppSelector } from 'app/providers/StoreProvider'
import { getUserAuthData } from 'features/Authorization'
import { ProfileEditHeader } from '../ProfileEditHeader/ProfileEditHeader'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { ProfileEditCard } from '../ProfileEditCard/ProfileEditCard'
import { getProfileDataAvatar } from '../../model/selectors/getProfileDataAvatar/getProfileDataAvatar'
import { getProfileValidErrors } from '../../model/selectors/gerProfileValidErrors/getProfileValidErrors'
import styles from './ProfileEditContainer.module.scss'

export const ProfileEditContainer: FC = () => {
    const authData = useAppSelector(getUserAuthData)
    const profileForm = useAppSelector(getProfileForm)
    const isLoading = useAppSelector(getProfileIsLoading)
    const profileDataAvatar = useAppSelector(getProfileDataAvatar)
    const validationErrors = useAppSelector(getProfileValidErrors)

    const canEdit = profileForm?.id === authData?.id

    return (
        <div className={styles.profileWrapper}>
            <ProfileEditHeader
                canEdit={canEdit}
                src={profileDataAvatar}
                isLoading={isLoading}
                validationErrors={validationErrors}
            />
            <ProfileEditCard
                profileForm={profileForm}
                isLoading={isLoading}
                validationErrors={validationErrors}
            />
        </div>
    )
}

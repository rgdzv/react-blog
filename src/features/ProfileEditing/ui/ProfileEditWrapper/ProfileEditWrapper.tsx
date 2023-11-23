import { type FC } from 'react'
import styles from './ProfileEditWrapper.module.scss'
import { ProfileEditHeader } from '../ProfileEditHeader/ProfileEditHeader'
import { useAppSelector } from 'app/providers/StoreProvider'
import { getUserAuthData } from 'entities_/User'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { noavatar } from 'shared/assets'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { ProfileEditCard } from '../ProfileEditCard/ProfileEditCard'
import { getProfileDataAvatar } from '../../model/selectors/getProfileDataAvatar/getProfileDataAvatar'

export const ProfileEditWrapper: FC = () => {
    const authData = useAppSelector(getUserAuthData)
    const profileForm = useAppSelector(getProfileForm)
    const isLoading = useAppSelector(getProfileIsLoading)
    const profileDataAvatar = useAppSelector(getProfileDataAvatar)

    const canEdit = profileForm?.id === authData?.id
    const avatar = profileDataAvatar ?? noavatar

    return (
        <div className={styles.profileWrapper}>
            <ProfileEditHeader
                canEdit={canEdit}
                avatar={avatar}
                isLoading={isLoading}
            />
            <ProfileEditCard profileForm={profileForm} isLoading={isLoading} />
        </div>
    )
}

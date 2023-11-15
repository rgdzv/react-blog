import { type FC } from 'react'
import styles from './ProfileEditWrapper.module.scss'
import { ProfileEditHeader } from '../ProfileEditHeader/ProfileEditHeader'
import { useAppSelector } from 'app/providers/StoreProvider'
import { getUserAuthData } from 'entities_/User'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { noavatar } from 'shared/assets'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { ProfileEditCard } from '../ProfileEditCard/ProfileEditCard'

export const ProfileEditWrapper: FC = () => {
    const authData = useAppSelector(getUserAuthData)
    const profileData = useAppSelector(getProfileData)
    const isLoading = useAppSelector(getProfileIsLoading)

    const canEdit = profileData?.id === authData?.id
    const avatar = profileData?.avatar ?? noavatar

    return (
        <div className={styles.profileWrapper}>
            <ProfileEditHeader
                canEdit={canEdit}
                avatar={avatar}
                isLoading={isLoading}
            />
            <ProfileEditCard profileData={profileData} />
        </div>
    )
}

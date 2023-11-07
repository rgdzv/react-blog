import {
    ProfileEditWrapper,
    getProfileData,
    profileReducer
} from 'features/ProfileEditing'
import { useEffect, type FC } from 'react'
import styles from './ProfilePage.module.scss'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { useParams } from 'react-router-dom'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage: FC = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()

    useEffect(() => {
        if (id !== undefined) {
            void dispatch(getProfileData(String(id)))
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={styles.profilePage} data-testid='profile-page'>
            <DynamicReducerLoader reducers={reducers}>
                <ProfileEditWrapper />
            </DynamicReducerLoader>
        </div>
    )
}

export default ProfilePage

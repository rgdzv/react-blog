import { useEffect, type FC } from 'react'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { profileReducer } from '../../model/slice/profileSlice'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { getProfileData } from '../../model/services/getProfileData/getProfileData'
import { useParams } from 'react-router-dom'
import styles from './ProfileEditWrapper.module.scss'
import { ProfileEditHeader } from '../ProfileEditHeader/ProfileEditHeader'

const reducers: ReducersList = {
    profile: profileReducer
}

export const ProfileEditWrapper: FC = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()

    useEffect(() => {
        if (id !== undefined) {
            void dispatch(getProfileData(String(id)))
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <DynamicReducerLoader reducers={reducers}>
            <div className={styles.profileWrapper}>
                <ProfileEditHeader />
            </div>
        </DynamicReducerLoader>
    )
}

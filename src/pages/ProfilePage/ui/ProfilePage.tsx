import {
    ProfileEditWrapper,
    getProfileData,
    profileReducer
} from 'features/ProfileEditing'
import { useEffect, type FC } from 'react'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { useParams } from 'react-router-dom'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { Page } from 'widgets/Page'

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage: FC = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()

    useEffect(() => {
        if (id !== undefined) {
            void dispatch(getProfileData(id))
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page dataTestId='profile-page'>
                <ProfileEditWrapper />
            </Page>
        </DynamicReducerLoader>
    )
}

export default ProfilePage

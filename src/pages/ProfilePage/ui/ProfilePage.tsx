import { useEffect } from 'react'
import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'
import {
    ProfileEditContainer,
    getProfileData,
    profileReducer
} from 'features/ProfileEditing'
import {
    DynamicReducerLoader,
    useAppDispatch,
    type ReducersList
} from 'shared/lib'

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
    }, [dispatch, id])

    return (
        <DynamicReducerLoader reducers={reducers}>
            <Page dataTestId='profile-page'>
                <ProfileEditContainer />
            </Page>
        </DynamicReducerLoader>
    )
}

export default ProfilePage

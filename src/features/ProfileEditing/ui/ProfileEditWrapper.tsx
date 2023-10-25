import { useEffect, type FC } from 'react'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { profileReducer } from '../model/slice/profileSlice'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { useParams } from 'react-router-dom'
import { getProfileData } from '../model/services/getProfileData/getProfileData'

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
    }, []) //eslint-disable-line

    return (
        <DynamicReducerLoader reducers={reducers}>
            <div></div>
        </DynamicReducerLoader>
    )
}

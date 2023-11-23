import { useCallback, type FC, type ChangeEvent } from 'react'
import styles from './ProfileEditCard.module.scss'
import { type Profile, ProfileCard } from 'entities_/Profile'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import { profileActions } from '../../model/slice/profileSlice'
import { type CurrencyType } from 'entities_/Currency'

interface ProfileEditCardPropsInterface {
    profileForm: Profile
    isLoading: boolean
}

export const ProfileEditCard: FC<ProfileEditCardPropsInterface> = ({
    profileForm,
    isLoading
}) => {
    const dispatch = useAppDispatch()
    const readOnly = useAppSelector(getProfileReadOnly)

    const onChangeFirstName = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(profileActions.updateProfile({ first: e.target.value }))
        },
        [dispatch]
    )

    const onChangeLastName = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(profileActions.updateProfile({ lastname: e.target.value }))
        },
        [dispatch]
    )

    const onChangeAge = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                profileActions.updateProfile({ age: Number(e.target.value) })
            )
        },
        [dispatch]
    )

    const onChangeCity = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(profileActions.updateProfile({ city: e.target.value }))
        },
        [dispatch]
    )

    const onChangeUserName = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(profileActions.updateProfile({ username: e.target.value }))
        },
        [dispatch]
    )

    const onChangeAvatar = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(profileActions.updateProfile({ avatar: e.target.value }))
        },
        [dispatch]
    )

    const onChangeCurrency = useCallback(
        (currency: CurrencyType) => {
            dispatch(profileActions.updateProfile({ currency }))
        },
        [dispatch]
    )

    return (
        <div className={styles.profileEditCard}>
            <ProfileCard
                profileForm={profileForm}
                isLoading={isLoading}
                readOnly={readOnly}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUserName={onChangeUserName}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
            />
        </div>
    )
}

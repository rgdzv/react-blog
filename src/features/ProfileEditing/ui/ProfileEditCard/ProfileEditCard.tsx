import { type ChangeEvent, type FC, useCallback } from 'react'
import {
    type CountryType,
    type CurrencyType,
    type Profile,
    ProfileCard
} from 'entities_/Profile'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import { profileActions } from '../../model/slice/profileSlice'
import styles from './ProfileEditCard.module.scss'

interface ProfileEditCardPropsInterface {
    profileForm: Profile
    isLoading: boolean
    validationErrors: Record<string, string>
}

export const ProfileEditCard: FC<ProfileEditCardPropsInterface> = ({
    profileForm,
    isLoading,
    validationErrors
}) => {
    const dispatch = useAppDispatch()
    const readOnly = useAppSelector(getProfileReadOnly)

    const onChangeInputs = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(
                profileActions.updateProfile({
                    [e.target.name]: e.target.value
                })
            )
        },
        [dispatch]
    )

    const onChangeCurrency = useCallback(
        (currency: CurrencyType) => {
            dispatch(profileActions.updateProfile({ currency }))
        },
        [dispatch]
    )

    const onChangeCountry = useCallback(
        (country: CountryType) => {
            dispatch(profileActions.updateProfile({ country }))
        },
        [dispatch]
    )

    return (
        <div className={styles.profileEditCard}>
            <ProfileCard
                profileForm={profileForm}
                isLoading={isLoading}
                readOnly={readOnly}
                onChangeInputs={onChangeInputs}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                validationErrors={validationErrors}
            />
        </div>
    )
}

import { useCallback, type FC, type ChangeEvent } from 'react'
import styles from './ProfileEditCard.module.scss'
import {
    type Profile,
    ProfileCard,
    type CurrencyType,
    type CountryType
} from 'entities_/Profile'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly'
import { getProfileValidErrors } from '../../model/selectors/gerProfileValidErrors/getProfileValidErrors'
import { profileActions } from '../../model/slice/profileSlice'

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
    const validationErrors = useAppSelector(getProfileValidErrors)

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

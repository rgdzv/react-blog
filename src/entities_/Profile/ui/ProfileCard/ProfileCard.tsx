import { type ChangeEvent, type FC } from 'react'
import styles from './ProfileCard.module.scss'
import { Input } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type Profile } from '../../model/types/profile'

interface ProfileCardPropsInterface {
    profileForm: Profile
    isLoading: boolean
    readOnly: boolean
    onChangeFirstName?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeLastName?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeAge?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeCity?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeUserName?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeAvatar?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ProfileCard: FC<ProfileCardPropsInterface> = ({
    profileForm,
    isLoading,
    readOnly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUserName,
    onChangeAvatar
}) => {
    const { t } = useTranslation('profile')

    const profileName = t('Имя')
    const profileLastName = t('Фамилия')
    const profileAge = t('Возраст')
    const profileCity = t('Город')
    const profileUserName = t('Имя пользователя')
    const profileAvatarLink = t('Ссылка на аватар')

    const profileNameValue = String(profileForm?.first)
    const profileLastNameValue = String(profileForm?.lastname)
    const profileAgeValue = String(profileForm?.age)
    const profileCityValue = String(profileForm?.city)
    const profileUserNameValue = String(profileForm?.username)
    const profileAvatarLinkValue = String(profileForm?.avatar)

    return (
        <>
            <div className={styles.profileCardLeft}>
                <Input
                    value={profileNameValue}
                    onChange={onChangeFirstName}
                    placeholder={profileName}
                    label={profileName}
                    id='profile_card_name'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                />
                <Input
                    value={profileLastNameValue}
                    onChange={onChangeLastName}
                    placeholder={profileLastName}
                    label={profileLastName}
                    id='profile_card_lastName'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                />
                <Input
                    value={profileAgeValue}
                    onChange={onChangeAge}
                    type='number'
                    placeholder={profileAge}
                    label={profileAge}
                    id='profile_card_age'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                />
                <Input
                    value={profileCityValue}
                    onChange={onChangeCity}
                    placeholder={profileCity}
                    label={profileCity}
                    id='profile_card_city'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                />
            </div>
            <div className={styles.profileCardRight}>
                <Input
                    value={profileUserNameValue}
                    onChange={onChangeUserName}
                    placeholder={profileUserName}
                    label={profileUserName}
                    id='profile_card_username'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                />
                <Input
                    value={profileAvatarLinkValue}
                    onChange={onChangeAvatar}
                    placeholder={profileAvatarLink}
                    label={profileAvatarLink}
                    id='profile_card_avatar'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                    isLoading={isLoading}
                    disabled={readOnly}
                />
            </div>
        </>
    )
}

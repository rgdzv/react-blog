import { type FC } from 'react'
import styles from './ProfileCard.module.scss'
import { Input } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type Profile } from '../../model/types/profile'

interface ProfileCardPropsInterface {
    profileData: Profile
    isLoading: boolean
    readOnly: boolean
}

export const ProfileCard: FC<ProfileCardPropsInterface> = ({
    profileData,
    isLoading,
    readOnly
}) => {
    const { t } = useTranslation('profile')

    const profileName = t('Имя')
    const profileLastName = t('Фамилия')
    const profileAge = t('Возраст')
    const profileCity = t('Город')
    const profileUserName = t('Имя пользователя')
    const profileAvatarLink = t('Ссылка на аватар')

    const profileNameValue = String(profileData?.first)
    const profileLastNameValue = String(profileData?.lastname)
    const profileAgeValue = String(profileData?.age)
    const profileCityValue = String(profileData?.city)
    const profileUserNameValue = String(profileData?.username)
    const profileAvatarLinkValue = String(profileData?.avatar)

    return (
        <>
            <div className={styles.profileCardLeft}>
                <Input
                    value={profileNameValue}
                    onChange={() => {}}
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
                    onChange={() => {}}
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
                    onChange={() => {}}
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
                    onChange={() => {}}
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
                    onChange={() => {}}
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
                    onChange={() => {}}
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

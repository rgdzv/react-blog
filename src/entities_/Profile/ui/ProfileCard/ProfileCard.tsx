import { type FC } from 'react'
import styles from './ProfileCard.module.scss'
import { Input } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type Profile } from '../../model/types/profile'

interface ProfileCardPropsInterface {
    profileData: Profile
}

export const ProfileCard: FC<ProfileCardPropsInterface> = ({ profileData }) => {
    const { t } = useTranslation('profile')

    const profileName = t('Имя')
    const profileLastName = t('Фамилия')
    const profileAge = t('Возраст')
    const profileCity = t('Город')

    const profileNameValue = String(profileData?.first)
    const profileLastNameValue = String(profileData?.lastname)
    const profileAgeValue = String(profileData?.age)
    const profileCityValue = String(profileData?.city)

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
                />
                <Input
                    value={profileLastNameValue}
                    onChange={() => {}}
                    placeholder={profileLastName}
                    label={profileLastName}
                    id='profile_card_lastName'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                />
                <Input
                    value={profileAgeValue}
                    onChange={() => {}}
                    placeholder={profileAge}
                    label={profileAge}
                    id='profile_card_age'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                />
                <Input
                    value={profileCityValue}
                    onChange={() => {}}
                    placeholder={profileCity}
                    label={profileCity}
                    id='profile_card_city'
                    classNameForLabel='profile_label'
                    classNameForInput='profile_input'
                />
            </div>
            {/* <div className={styles.profileCardRight}></div> */}
        </>
    )
}

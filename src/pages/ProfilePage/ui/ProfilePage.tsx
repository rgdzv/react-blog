import { ProfileEditWrapper } from 'features/ProfileEditing'
import { type FC } from 'react'

const ProfilePage: FC = () => {
    return (
        <div data-testid='profile-page'>
            <ProfileEditWrapper />
        </div>
    )
}

export default ProfilePage

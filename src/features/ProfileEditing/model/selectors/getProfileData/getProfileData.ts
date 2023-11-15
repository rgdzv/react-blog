import { type StateSchema } from 'app/providers/StoreProvider'
import { type Profile } from 'entities_/Profile'

export const getProfileData = (state: StateSchema): Profile => {
    return state.profile?.data as Profile
}

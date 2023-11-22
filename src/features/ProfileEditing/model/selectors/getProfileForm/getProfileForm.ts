import { type StateSchema } from 'app/providers/StoreProvider'
import { type Profile } from 'entities_/Profile'

export const getProfileForm = (state: StateSchema): Profile => {
    return state.profile?.form as Profile
}

import type { User } from 'entities_/User'

export interface UserSchema {
    authData?: User
    initiated: boolean
}

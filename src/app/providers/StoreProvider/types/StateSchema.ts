import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/Authorization'

export interface StateSchema {
    loginForm?: LoginSchema
    user: UserSchema
}

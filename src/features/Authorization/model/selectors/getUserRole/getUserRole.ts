import { createSelector } from '@reduxjs/toolkit'
import type { StateSchema } from 'app/providers/StoreProvider'
import { UserRole } from 'entities_/User'

export const getUserRole = (state: StateSchema): UserRole[] => {
    return state.user?.authData?.roles as UserRole[]
}

export const isUserAdmin = createSelector(getUserRole, (roles) =>
    Boolean(roles?.includes(UserRole.ADMIN))
)

export const isUserManager = createSelector(getUserRole, (roles) =>
    Boolean(roles?.includes(UserRole.MANAGER))
)

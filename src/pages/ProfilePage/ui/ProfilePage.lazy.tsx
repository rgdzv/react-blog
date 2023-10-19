import { lazy } from 'react'

export const ProfilePageLazy = lazy(async () => await import('./ProfilePage'))

import { lazy } from 'react'

export const AdminPageLazy = lazy(async () => await import('./AdminPage'))

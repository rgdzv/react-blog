import { createSelector } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ScrollSchema } from '../../types/UISchema'

export const getUIScroll = (state: StateSchema): ScrollSchema => state.ui.scroll

export const getUIScrollByPath = createSelector(
    getUIScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] ?? 0
)

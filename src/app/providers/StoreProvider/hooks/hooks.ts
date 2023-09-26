import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector
} from 'react-redux'
import { type AppDispatch, type RootState } from '../types/StoreHooksType'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

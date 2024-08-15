import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector,
    useStore
} from 'react-redux'
import {
    type AppDispatch,
    type AppStore,
    type RootState
} from '../../types/StoreHooks'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = useStore as () => AppStore

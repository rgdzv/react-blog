import type { StateSchema } from './StateSchema'
import type { createReduxStore } from '../config/store'

declare global {
    type AppStore = ReturnType<typeof createReduxStore>
    type AppDispatch = AppStore['dispatch']
    type RootState = StateSchema
}

import { type createReduxStore } from '../config/store'
import { type StateSchema } from './StateSchema'

export type AppStore = ReturnType<typeof createReduxStore>
export type RootState = StateSchema
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

import { type StateSchema } from './StateSchema'
import { type createReduxStore } from '../config/store'

export type RootState = StateSchema
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

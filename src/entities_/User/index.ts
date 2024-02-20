export { type User, type UserSchema } from './model/types/user'
export { userReducer, userActions } from './model/slice/userSlice'
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
export { getUserInitiated } from './model/selectors/getUserInitiated/getUserInitiated'
export { getUserAvatar } from './model/selectors/getUserAvatar/getUserAvatar'
export {
    isUserAdmin,
    isUserManager
} from './model/selectors/getUserRole/getUserRole'

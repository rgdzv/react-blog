import { type FC } from 'react'
import { Image } from '../Image/Image'

interface AvatarPropsInterface {
    avatar: string
}

export const Avatar: FC<AvatarPropsInterface> = ({ avatar }) => {
    return <Image avatar={avatar} />
}

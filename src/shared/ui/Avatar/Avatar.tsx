import { type FC } from 'react'
import { Image } from '../Image/Image'

interface AvatarPropsInterface {
    className?: string
}

export const Avatar: FC<AvatarPropsInterface> = ({ className }) => {
    return <Image className={className} />
}
